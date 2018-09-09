import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import Card from '../Card';
import Timeline from '../Timeline';
import TimelineEntry from '../Timeline/TimelineEntry';
import h1Logo from '../../img/h1.svg';
import yahooLogo from '../../img/yahoo.svg';
import uscLogo from '../../img/usc.svg';
import '../../animations/blur-out.css';
import '../../animations/uncover-right.css';

type CareerProps = TransitionProps;

class Career extends React.Component<CareerProps> {
    public render() {
        return (
            <div className={`fw1 ${this.props.exit ? 'blur-out' : 'uncover-right'}`}>
                <Timeline>
                    <TimelineEntry expandOnHover={false}>
                        <p className="tc ma0 f2">Now</p>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">September 2017</p>
                            <p className="ma0 f3">Virgin Hyperloop One</p>
                            <span className="db f6 silver">
                                <i>Full Time Software Engineer</i>
                            </span>

                            <ul className="mt4">
                                <li>I did this</li>
                                <li>And also this</li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">June 2017</p>
                            <p className="ma0 f3">Virgin Hyperloop One</p>
                            <span className="db f6 silver">
                                <i>Software Intern</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2017</p>
                            <p className="ma0 f3">
                                Graduation
                                <i className="fas fa-graduation-cap ml2" />
                            </p>
                            <span className="db f6 silver">
                                <i>M.S. Computer Science, General</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">Oct 2016</p>
                            <p className="ma0 f3">Jibo project</p>
                            <span className="db f6 silver">
                                <i>With Professor David Barnhart</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2016</p>
                            <p className="ma0 f3">Yahoo!</p>
                            <span className="db f6 silver">
                                <i>Technical Intern II</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2016</p>
                            <p className="ma0 f3">
                                Graduation
                                <i className="fas fa-graduation-cap ml2" />
                            </p>
                            <span className="db f6 silver">
                                <i>B.S. Computer Science</i>
                            </span>
                            <span className="db f6 silver">
                                <i>Minor: Video Game Programming</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2015</p>
                            <p className="ma0 f3">Yahoo!</p>
                            <span className="db f6 silver">
                                <i>Technical Intern I</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2014</p>
                            <p className="ma0 f3">Mentor Graphics</p>
                            <span className="db f6 silver">
                                <i>Software Developer Intern</i>
                            </span>
                        </Card>
                    </TimelineEntry>
                </Timeline>
            </div>
        );
    }
}

export default Career;
