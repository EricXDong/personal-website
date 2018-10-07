import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import './videos.css';

type VideosProps = TransitionProps;

interface Video {
    id: string;
    src: string;
    focus: boolean;
}

interface VideosState {
    videos: Video[];
}
class Videos extends React.Component<VideosProps, VideosState> {
    private videoRefs: Array<React.RefObject<HTMLIFrameElement>>;

    constructor(props: VideosProps) {
        super(props);
        const videos = [
            {
                id: 'pledgeMission',
                src: 'https://www.youtube.com/embed/958Hn9BMMeM?enablejsapi=1',
                focus: false,
            },
            {
                id: 'danceoff',
                src: 'https://www.youtube.com/embed/AfTK8--KMvA?enablejsapi=1',
                focus: false,
            },
            {
                id: 'OTGFall2013',
                src: 'https://www.youtube.com/embed/NELdGAqOkKE?enablejsapi=1',
                focus: false,
            },
            {
                id: 'OTGVegas',
                src: 'https://www.youtube.com/embed/T9klu7LL-9I?enablejsapi=1',
                focus: false,
            },
            {
                id: 'KBD',
                src: 'https://www.youtube.com/embed/3kpgTrivmbA?start=3180?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTRecognizeReal',
                src: 'https://www.youtube.com/embed/YybhsefWqDI?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTSpring2016',
                src: 'https://www.youtube.com/embed/MjsfBRQw9pk?enablejsapi=1',
                focus: false,
            },
            {
                id: 'APODanceComp',
                src: 'https://www.youtube.com/embed/aru7UeyxhQ4?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTFall2016Promo',
                src: 'https://www.youtube.com/embed/Bfl3zEOQb_Y?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTFall2016',
                src: 'https://www.youtube.com/embed/mb5_sNUGqkg?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTFall2016Boyz',
                src: 'https://www.youtube.com/embed/xSJFLuEsIlw?enablejsapi=1',
                focus: false,
            },
            {
                id: 'BTSpring2017Promo',
                src:
                    'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fuscbreakthrough%2Fvideos%2F10158561334815282%2F&show_text=0&width=560',
                focus: false,
            },
            {
                id: 'BTSpring2017',
                src: 'https://www.youtube.com/embed/9szS_HLUrZM?enablejsapi=1',
                focus: false,
            },
        ];
        this.videoRefs = videos.map(() => React.createRef<HTMLIFrameElement>());
        this.state = { videos };
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

    public render() {
        const sectionSpacing = {
            paddingLeft: '10vw',
            paddingRight: '10vw',
        };
        const videoWithFocus: boolean = this.state.videos.findIndex(v => v.focus) > -1;
        return (
            <div
                className="relative flex flex-wrap justify-between overflow-scroll items-center z-1"
                style={sectionSpacing}
            >
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
                        width: video.focus ? '45vw' : '15vw',
                        height: video.focus ? '50vh' : '20vh',
                    };
                    return (
                        <div
                            className="relative white ma3 bg-black-50 ba b--white-50 bw1 video-container"
                            style={videoSizing}
                        >
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
        );
    }
}

export default Videos;
