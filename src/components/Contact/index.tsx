import * as React from 'react';

import ContactLink from './ContactLink';
import { FormButton } from '../Buttons';
import { TransitionProps } from '../../const/transition';
import fb from '../../img/fb.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import './contact.css';
import '../../common.css';
import '../../animations/blur-out.css';
import '../../animations/fade-in.css';
import '../../animations/fade-in-right.css';

type ContactProps = TransitionProps;

interface Link {
    component: React.ReactNode;
    style: any;
    classes: string;
    offsetTransform?: string;
}

interface ContactState {
    links: Link[];
    sender: string;
    message: string;
}

function getXYFromAngle(angleRadians: number, circleRadius: number): number[] {
    //  Solve for x,y coordinates using MATH Y'ALL
    const x = Math.round(circleRadius * Math.sin(angleRadians));
    const y = Math.round(circleRadius * Math.cos(angleRadians));
    return [x, y];
}

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
            links: [
                {
                    component: <ContactLink icon={instagram} url="https://www.instagram.com/thenameisdong/" />,
                    style: centerStyle,
                    classes: 'fade-in',
                },
                {
                    component: <ContactLink icon={linkedin} url="https://www.linkedin.com/in/dongeric/" />,
                    style: centerStyle,
                    classes: 'fade-in',
                },
                {
                    component: <ContactLink icon={github} url="https://github.com/EricXDong" />,
                    style: centerStyle,
                    classes: 'fade-in',
                },
                {
                    component: <ContactLink icon={fb} url="https://www.facebook.com/EricDonger" />,
                    style: centerStyle,
                    classes: 'fade-in',
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
                            document.head.appendChild(styleElement);

                            link.style = {
                                animation: `${animationName} 300s linear infinite`,
                            };

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

    public updateSender = (e: React.FormEvent<HTMLInputElement>) =>
        this.setState({
            sender: e.currentTarget.value,
        });

    public updateMessage = (e: React.FormEvent<HTMLTextAreaElement>) =>
        this.setState({
            message: e.currentTarget.value,
        });

    public submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('SEND ME OFF FAM');
        this.setState({
            sender: '',
            message: '',
        });
    };

    public render() {
        const inputClasses = 'w-100 f4 pa3 db br2 bg-black-40 white ba b--white-60 no-focus';
        return (
            <div
                className={`absolute flex items-center justify-between white w-70 h-50 absolute-center raleway-font ${
                    this.props.exit ? 'blur-out' : ''
                }`}
            >
                <form
                    className="w-40 h-100 flex flex-column justify-center fade-in-right"
                    onSubmit={this.submitMessage}
                >
                    <p className="f2 mb3 self-start">Tell me anything</p>
                    <input
                        type="email"
                        className={`mb3 border-box ${inputClasses}`}
                        required={true}
                        placeholder="Email address"
                        onChange={this.updateSender}
                        value={this.state.sender}
                    />
                    <textarea
                        className={`h-50 ${inputClasses}`}
                        style={{ resize: 'none' }}
                        required={true}
                        placeholder="Thoughts go here"
                        onChange={this.updateMessage}
                        value={this.state.message}
                    />
                    <FormButton extraclasses="white f3 mt3 self-end" value="Send" />
                </form>
                <div className="w-40 h-100 relative flex justify-center items-center">
                    <p style={{ animationDelay: '1.25s' }} className="f3 fade-in">
                        Or check out
                    </p>
                    {this.state.links.map((link, i) => {
                        return (
                            <div className={`absolute ${link.classes}`} style={link.style}>
                                {link.component}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;
