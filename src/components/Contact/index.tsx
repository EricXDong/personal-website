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

type ContactProps = TransitionProps;

interface Link {
    component: React.ReactNode;
    style: any;
    classes: string;
}

interface ContactState {
    links: Link[];
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
    transform: 'translate(-50%, -50%)'
};

class Contact extends React.Component<ContactProps, ContactState> {

    //  In vw
    public circleRadius = 200;
    
    constructor(props: ContactProps) {
        super(props);
        this.state = {
            message: '',
            links: [{
                component: <ContactLink icon={instagram} url="https://www.instagram.com/thenameisdong/" />,
                style: centerStyle,
                classes: 'fade-in',
            }, {
                component: <ContactLink icon={linkedin} url="https://www.linkedin.com/in/dongeric/" />,
                style: centerStyle,
                classes: 'fade-in',
            }, {
                component: <ContactLink icon={github} url="https://github.com/EricXDong" />,
                style: centerStyle,
                classes: 'fade-in',
            }, {
                component: <ContactLink icon={fb} url="https://www.facebook.com/EricDonger" />,
                style: centerStyle,
                classes: 'fade-in',
            }]
        };
    }

    public componentDidMount() {
        setTimeout(() => {
            let updatedLinks = this.state.links.map((link, i) => {
                const angle = (i * (360 / this.state.links.length)) * (Math.PI / 180);
                return this.updateLinkStyleFromAngle(link, angle);
            });
            this.setState({
                links: updatedLinks
            });

            let add = 0;
            setTimeout(() => setInterval(() => {
                add += 0.05;
                if (add >= 360) {
                    add = add % 360;
                }
                updatedLinks = this.state.links.map((link, i) => {
                    let angleDegrees = (i * (360 / this.state.links.length)) + add;
                    if (angleDegrees >= 360) {
                        angleDegrees = angleDegrees % 360;
                    }
                    const angle = angleDegrees * (Math.PI / 180);
                    const newLink = this.updateLinkStyleFromAngle(link, angle);
                    return newLink;
                });
                this.setState({
                    links: updatedLinks
                });
            }, 10), 500);
        }, 750);
    }

    public updateLinkStyleFromAngle = (link: Link, angle: number) => {
        const coords = getXYFromAngle(angle, this.circleRadius);
        link.style = Object.assign({}, link.style, {
            transform: `${centerStyle.transform} translate(${coords[0]}px, ${-coords[1]}px)`,
            transition: 'transform 0.5s',
        });
        link.classes = '';
        return link
    }

    public render() {
        return (
            <div
                className={`absolute flex items-center justify-between white w-70 h-50 absolute-center raleway-font ${
                    this.props.exit ? 'blur-out' : ''
                }`}
            >
                <div className="w-40 h-100 flex flex-column justify-center">
                    <p className="f3 mb2 self-start">Tell me anything</p>
                    <textarea className="w-100 h-50 f4 db br2 bg-black-40 white pa3 text-area" />
                    <FormButton extraclasses="white f3 mt2 self-end">Send</FormButton>
                </div>
                <div className="w-40 h-100 relative flex justify-center items-center ba b--white">
                    {this.state.links.map((link, i) => {
                        return (
                            <div className={`absolute ${link.classes}`} style={link.style}>{link.component}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;
