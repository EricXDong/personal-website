import * as React from 'react';

import Image from '../Image';
import Card from '../Card';
import profilePic from '../../img/profile.png';
import { TransitionProps } from '../../const/transition';
import '../../animations/fade-in-left.css';
import '../../animations/fade-in-right.css';
import '../../animations/blur-out.css';
import './home.css';

type HomeProps = TransitionProps;

interface HomeState {
    fadeImg: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            fadeImg: false,
        };
    }

    public fadeImg = () => this.setState({ fadeImg: true });

    public render() {
        const cards = [
            <>
                <p>This is some stuff about me</p>
                <p>
                    This is some more stuff about me. I'm gonna make this one a very long sentence so I can test how
                    things look when they go to new lines.
                </p>
            </>,
            <p>Adding another card to see how this looks.</p>,
            <div>
                <p>Perhaps a bulleted list of things</p>
                <ul>
                    <li>Cactus</li>
                    <li>Traumatization</li>
                    <li>Bucket sand</li>
                    <li>Winnie the Pooh</li>
                </ul>
            </div>,
        ];
        return (
            <div className={this.props.exit ? 'blur-out' : ''}>
                <div className="flex">
                    <div>
                        <Card extraclasses={`mr4 dib ${this.state.fadeImg ? 'fade-in-left' : 'vis-hidden'}`}>
                            <Image src={profilePic} width="300" onLoad={this.fadeImg} />
                        </Card>
                    </div>
                    <div>
                        {cards.map((cardContent, i) => {
                            const delay = { animationDelay: `${i / 3}s` };
                            return (
                                <Card extraclasses={`white w-80 fade-in-right ${i ? 'mv4' : ''}`} style={delay}>
                                    {cardContent}
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
