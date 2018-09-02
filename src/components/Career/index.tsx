import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import Card from '../Card';
import '../../animations/fade-out.css';

type CareerProps = TransitionProps;

class Career extends React.Component<CareerProps> {
    public render() {
        return (
            <div className={this.props.exit ? 'fade-out' : ''}>
                <Card extraclasses="white">
                    <p>Wow I work at places!!!!!</p>
                </Card>
            </div>
        );
    }
}

export default Career;
