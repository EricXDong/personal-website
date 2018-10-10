import * as React from 'react';

import Image from '../Image';
import Card from '../Card';
import profilePic from '../../img/profile.png';
import { TransitionProps } from '../../const/transition';
import '../../animations/fade-in-left.css';
import '../../animations/fade-in-down.css';
import '../../animations/blur-out.css';
import './extra.css';

type ExtraProps = TransitionProps;

interface ExtraState {
    fadeImg: boolean;
}

class Extra extends React.Component<ExtraProps, ExtraState> {
    constructor(props: ExtraProps) {
        super(props);
        this.state = {
            fadeImg: false,
        };
    }

    public fadeImg = () => this.setState({ fadeImg: true });

    public render() {
        const cards = [
            [
                <p className="tc f1">Eric Dong</p>,
                <p className="tc f3">Full stack</p>,
                <p className="tc f3">Web developer</p>,
            ],
            [<p className="tc f3">Cat owner</p>, <p className="tc f3">Best cat</p>, <p className="tc f3">Dancer</p>],
            [
                <p className="tc f3">Soccer player</p>,
                <p className="tc f3">Foodie</p>,
                <p className="tc f3">Board gamer</p>,
            ],
        ];
        return (
            <div className={`extra mt6 ${this.props.exit ? 'blur-out' : ''}`}>
                <div className="flex items-center">
                    <div>
                        <Card extraclasses={`mr5 dib ${this.state.fadeImg ? 'fade-in-left' : 'vis-hidden'}`}>
                            <Image src={profilePic} width="400" onLoad={this.fadeImg} />
                        </Card>
                    </div>
                    <div>
                        {cards.map((cardRow, i) => (
                            <div className="flex items-center justify-center">
                                {cardRow.map((card, j) => {
                                    const delay = { animationDelay: `${(i * cardRow.length + j) / 4}s` };
                                    return (
                                        <Card
                                            extraclasses={`inline-flex items-center justify-center white mh5 mv4 fade-in-down card-size`}
                                            style={delay}
                                        >
                                            {card}
                                        </Card>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Extra;
