import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import '../../animations/blur-out.css';
import '../../animations/fade-in.css';
import '../../animations/fade-in-left.css';
import '../../animations/fade-in-right.css';
import './home.css';

type HomeProps = TransitionProps;

const Home: React.SFC<HomeProps> = ({ exit }) => (
    <div className={`absolute w-80 white home ${exit ? 'blur-out' : ''}`}>
        <p className="tc mb2 huge-font fade-in-left">Eric Dong</p>
        <div className="flex items-center justify-center">
            <span className="bb b--white bw1 w-20 fade-in-left" />
            <span className="mh3 far fa-square rotate fade-in maroon" />
            <span className="bb b--white bw1 w-20 fade-in-right" />
        </div>
        <p className="tc f1 mt2 thin-font fade-in-right">Full stack web developer</p>
    </div>
);

export default Home;
