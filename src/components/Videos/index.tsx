import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import * as scrollIntoView from 'scroll-into-view';

import AuthenticateVideosModal from './AuthenticateVideosModal';
import { RootState } from 'src/state/reducers';
import { TransitionProps } from 'src/const/transition';
import videos, { Video } from 'src/const/videos';
import './videos.css';
import 'src/common.css';
import 'src/animations/fade-in.css';
import 'src/animations/fade-in-down.css';
import 'src/animations/blur-out.css';

const styles = (theme: Theme) =>
    createStyles({
        primaryLight: { color: theme.palette.primary.light },
        secondaryMain: { color: theme.palette.secondary.main },
    });

interface VideosPropsFromState {
    isAuthenticated: boolean;
}

type VideosProps = VideosPropsFromState & TransitionProps & WithStyles<typeof styles>;

interface VideosState {
    videos: Video[];
}

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.videos.isAuthenticated,
});

class Videos extends React.Component<VideosProps, VideosState> {
    private mainRef: React.RefObject<HTMLDivElement>;
    private videoRefs: Array<React.RefObject<HTMLIFrameElement>>;

    private thumbnailWidth = 319;
    private thumbnailHeight = 180;

    constructor(props: VideosProps) {
        super(props);
        this.videoRefs = videos.map(() => React.createRef<HTMLIFrameElement>());
        this.mainRef = React.createRef<HTMLDivElement>();
        this.state = { videos };
    }

    public componentDidMount() {
        //  Sets the loaded flag when the video has loaded
        this.videoRefs.forEach((v, i) => {
            if (v.current) {
                v.current.onload = () =>
                    this.setState({
                        videos: this.state.videos
                            .slice(0, i)
                            .concat([
                                Object.assign({}, this.state.videos[i], {
                                    loaded: true,
                                }),
                            ])
                            .concat(this.state.videos.slice(i + 1)),
                    });
            }
        });
        //  Re-render so the mainRef width is refreshed
        this.setState({ videos });
    }

    //  Doesn't work on Facebook videos :(
    public pauseVideoByRefIndex = (idx: number) => {
        const ref = this.videoRefs[idx].current;
        if (ref && ref.contentWindow) {
            ref.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'pauseVideo',
                    args: '',
                }),
                '*'
            );
        }
    };

    public focusVideoByIndex = (idx: number) => {
        this.setState({
            videos: this.state.videos.map((v, i) => {
                if (v.focus) {
                    this.pauseVideoByRefIndex(i);
                }
                return Object.assign({}, v, {
                    focus: i === idx ? true : false,
                });
            }),
        });

        //  Automatically scroll it into view
        const current = this.videoRefs[idx].current;
        if (current) {
            const node = ReactDOM.findDOMNode(current as React.ReactInstance) as HTMLElement;
            scrollIntoView(node);
        }
    };

    public resetVideoFocus = () => {
        this.setState({
            videos: this.state.videos.map((v, i) => {
                this.pauseVideoByRefIndex(i);
                return Object.assign({}, v, {
                    focus: false,
                });
            }),
        });
    };

    public getDelayStyle = (idx: number) => {
        let numVideosPerRow = 1;
        if (this.mainRef.current) {
            const divWidth = this.mainRef.current.clientWidth * 0.8; //  0.8 comes from the left/right padding
            numVideosPerRow = Math.floor(divWidth / this.thumbnailWidth);
        }
        return {
            animationDelay: `${Math.floor(idx / numVideosPerRow) / 2}s`,
        };
    };

    public render() {
        const sectionSpacing = {
            paddingLeft: '10vw',
            paddingRight: '10vw',
        };
        const videoWithFocus: boolean = this.state.videos.findIndex(v => v.focus) > -1;
        return (
            <div
                ref={this.mainRef}
                className={`overflow-scroll ${this.props.exit ? 'blur-out' : ''}`}
                style={sectionSpacing}
            >
                {!this.props.isAuthenticated && <AuthenticateVideosModal />}
                <div className="mb3 fade-in">
                    <Typography variant="h6" className={`tr ${this.props.classes.primaryLight}`}>
                        Various videos I've been in. Keeping them here for the memories.
                    </Typography>
                </div>
                <div className="relative flex flex-wrap justify-between items-center z-1">
                    {videoWithFocus && (
                        <div
                            className="absolute w-100 top-0 left-0 z-0"
                            style={{ height: '120vh' }}
                            onClick={this.resetVideoFocus}
                        />
                    )}
                    {this.state.videos.map((video, i) => {
                        //  Bigger if it has focus
                        const videoSizing = {
                            width: video.focus ? `${this.thumbnailWidth * 2.5}px` : `${this.thumbnailWidth}px`,
                            height: video.focus ? `${this.thumbnailHeight * 2.5}px` : `${this.thumbnailHeight}px`,
                        };
                        return (
                            <div
                                className="relative white mv3 bg-black-50 ba b--white-50 bw1 video-container fade-in-down"
                                style={Object.assign({}, videoSizing, this.getDelayStyle(i))}
                            >
                                {!video.loaded && (
                                    <div className="absolute-center">
                                        <CircularProgress size={80} className={this.props.classes.secondaryMain} />
                                    </div>
                                )}
                                {!video.focus && (
                                    <div
                                        className="w-100 h-100 absolute top-0 left-0 pointer video-overlay"
                                        onClick={this.focusVideoByIndex.bind(this, i)}
                                    />
                                )}
                                <iframe
                                    id={video.id}
                                    ref={this.videoRefs[i]}
                                    className="w-100 h-100"
                                    src={video.src}
                                    frameBorder="0"
                                    allowFullScreen={true}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Videos));
