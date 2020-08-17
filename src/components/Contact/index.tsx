import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    TextField,
    Button,
    WithStyles,
    withStyles,
    Typography,
    createStyles,
    Theme,
    LinearProgress,
    withWidth,
} from '@material-ui/core';

import ContactLink from './ContactLink';
import { TransitionProps } from 'src/const/transition';
import { addBanner, AddBannerAction } from 'src/state/actions';
import { BannerTypes } from 'src/state/reducers/banners';
import ScreenSize from 'src/const/screen-size';
import postContact from 'src/http/post-contact';
import fb from 'src/img/fb.svg';
import linkedin from 'src/img/linkedin.svg';
import github from 'src/img/github.svg';
import artstation from 'src/img/artstation.svg';
import './contact.css';
import 'src/common.css';
import 'src/animations/blur-out.css';
import 'src/animations/blur-in.css';
import 'src/animations/fade-in.css';
import 'src/animations/fade-in-right.css';

interface ContactPropsFromDispatch {
    addBanner: (bannerType: BannerTypes, message: string) => AddBannerAction;
}

interface ContactProps extends ContactPropsFromDispatch, TransitionProps, WithStyles<typeof styles> {
    width: string;
}

interface Link {
    component: React.ReactNode;
    style: any;
    offsetTransform?: string;
}

interface ContactState {
    links: Link[];
    sender: string;
    message: string;
    isSending: boolean;
}

const getXYFromAngle = (angleRadians: number, circleRadius: number): number[] => {
    //  Solve for x,y coordinates using MATH Y'ALL
    const x = Math.round(circleRadius * Math.sin(angleRadians));
    const y = Math.round(circleRadius * Math.cos(angleRadians));
    return [x, y];
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addBanner: (bannerType: BannerTypes, message: string) => dispatch(addBanner(bannerType, message)),
});

const centerStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

class Contact extends React.Component<ContactProps, ContactState> {
    //  In vw
    public circleRadius = 12;

    constructor(props: ContactProps) {
        super(props);
        this.state = {
            sender: '',
            message: '',
            isSending: false,
            links: [
                {
                    component: <ContactLink icon={linkedin} url="https://www.linkedin.com/in/dongeric/" />,
                    style: centerStyle,
                },
                {
                    component: <ContactLink icon={github} url="https://github.com/EricXDong" />,
                    style: centerStyle,
                },
                {
                    component: <ContactLink icon={fb} url="https://www.facebook.com/EricDonger" />,
                    style: centerStyle,
                },
                {
                    component: <ContactLink icon={artstation} url="https://www.artstation.com/teaclub" />,
                    style: centerStyle,
                },
            ],
        };
    }

    public componentDidMount() {
        //  Wait for entry animation to finish
        setTimeout(() => {
            //  Move to initial positions
            const movedLinks = this.state.links.map((link, i) => {
                const angle = i * (360 / this.state.links.length) * (Math.PI / 180);
                return this.updateLinkStyleFromAngle(link, angle);
            });
            this.setState({
                links: movedLinks,
            });

            //  Start rotating after reaching initial position
            setTimeout(
                () =>
                    this.setState({
                        links: this.state.links.map((link, i) => {
                            //  Create new stylesheet for this link to handle rotate animation
                            const styleElement = document.createElement('style');
                            const animationName = `orbit-${i}`;
                            const animation = `
                                @keyframes ${animationName} {
                                    from { transform: rotate(0deg) ${link.offsetTransform} rotate(0deg) }
                                    to { transform: rotate(360deg) ${link.offsetTransform} rotate(-360deg) }
                                }
                            `;
                            styleElement.innerHTML = animation;
                            if (document.head) {
                                document.head.appendChild(styleElement);
                            }

                            link.style = { animation: `${animationName} 300s linear infinite` };
                            return link;
                        }),
                    }),
                500
            );
        }, 750);
    }

    public updateLinkStyleFromAngle = (link: Link, angle: number) => {
        const coords = getXYFromAngle(angle, this.circleRadius);
        link.offsetTransform = `translate(${coords[0]}vw, ${-coords[1]}vw)`;
        link.style = Object.assign({}, link.style, {
            transform: `${centerStyle.transform} ${link.offsetTransform}`,
            transition: 'transform 0.5s',
        });
        return link;
    };

    public updateSender = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({
            sender: e.currentTarget.value,
        });

    public updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({
            message: e.currentTarget.value,
        });

    public submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ isSending: true });
        postContact(this.state.sender, this.state.message)
            .then(response => {
                if (response.status >= 400) {
                    this.props.addBanner(
                        BannerTypes.ERROR,
                        "Oops! There was a problem sending your message. I've been notified and will address the " +
                            'issue as soon as possible.'
                    );
                } else {
                    this.props.addBanner(
                        BannerTypes.INFO,
                        'Thanks for the message! You should hear back from me within a day or two.'
                    );
                }
            })
            .then(() =>
                this.setState({
                    sender: '',
                    message: '',
                    isSending: false,
                })
            );
    };

    public render() {
        const { primaryMain, inputMargin } = this.props.classes;
        const width = this.props.width;
        const isBigScreen = width === ScreenSize.MD || width === ScreenSize.LG || width === ScreenSize.XL;
        return (
            <div
                className={`flex items-center justify-between white w-70 absolute-center raleway-font ${
                    this.props.exit ? 'blur-out' : ''
                }`}
            >
                <form
                    className={`h-100 flex flex-column justify-center fade-in-right ${isBigScreen ? 'w-40' : 'w-100'}`}
                    onSubmit={this.submitMessage}
                >
                    <Typography variant="h4" className={primaryMain}>
                        Tell me anything
                    </Typography>
                    <TextField
                        variant="outlined"
                        type="email"
                        label="Email address"
                        className={inputMargin}
                        required={true}
                        onChange={this.updateSender}
                        value={this.state.sender}
                    />
                    <TextField
                        variant="outlined"
                        multiline={true}
                        rows="8"
                        required={true}
                        label="Thoughts go here"
                        onChange={this.updateMessage}
                        value={this.state.message}
                    />
                    <div className="mt3 self-end">
                        <Button variant="outlined" type="submit" color="primary" size="large">
                            Send
                        </Button>
                        <div className="mt1">{this.state.isSending && <LinearProgress />}</div>
                    </div>
                </form>
                {isBigScreen && (
                    <div className="w-40 h-100 relative flex justify-center items-center">
                        <div style={{ animationDelay: '1.25s' }} className="f3 fade-in">
                            <Typography variant="h4" className={primaryMain}>
                                Also check out
                            </Typography>
                        </div>
                        {this.state.links.map((link, i) => {
                            return (
                                <div className="absolute blur-in" style={link.style}>
                                    {link.component}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

const styles = (theme: Theme) =>
    createStyles({
        primaryMain: { color: theme.palette.primary.main },
        inputMargin: {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
    });

export default withWidth()(
    withStyles(styles)(
        connect(
            null,
            mapDispatchToProps
        )(Contact)
    )
);
