import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import Card from '../Card';
import Timeline from '../Timeline';
import TimelineEntry, { TimelineEntrySizes } from '../Timeline/TimelineEntry';
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
                                <li>Helped design and build a fully integrated simulation system</li>
                                <li>Owned the web app for an internal cost optimization tool</li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo} size={TimelineEntrySizes.SMALL}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">June 2017</p>
                            <p className="ma0 f3">Virgin Hyperloop One</p>
                            <span className="db f6 silver">
                                <i>Software Intern</i>
                            </span>
                            <ul className="mt4">
                                <li>Worked on the company help system</li>
                                <li>Integrated the help system with Github</li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
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
                    <TimelineEntry size={TimelineEntrySizes.LARGE}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">October 2016</p>
                            <p className="ma0 f3">Jibo project</p>
                            <span className="db f6 silver">
                                <i>With Professor David Barnhart</i>
                            </span>
                            <div className="mt4">
                                <p>Engineering lead of a Jibo application.</p>
                                <ul>
                                    <li>
                                        Designed and built the project and its development/testing environment from
                                        scratch
                                    </li>
                                    <li>Managed a team of two developers and one researcher</li>
                                </ul>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo} size={TimelineEntrySizes.SMALL}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2016</p>
                            <p className="ma0 f3">Yahoo!</p>
                            <span className="db f6 silver">
                                <i>Technical Intern II</i>
                            </span>
                            <div className="mt4">
                                <p>Owned the video player side of the Yahoo! Sports Reel project.</p>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
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
                    <TimelineEntry>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">January 2016</p>
                            <p className="ma0 f3">BIRS</p>
                            <span className="db f6 silver">
                                <i>Brain Injury Research System</i>
                            </span>
                            <div className="mt4">
                                <p>
                                    Assisted a PhD group with building an early warning application for identifying
                                    victims of concussion.
                                </p>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo}>
                        <Card extraclasses="h-100 overflow-hidden">
                            <p className="mt0 mb1 f5 yellow">May 2015</p>
                            <p className="ma0 f3">Yahoo!</p>
                            <span className="db f6 silver">
                                <i>Technical Intern I</i>
                            </span>
                            <div className="mt4">
                                <ul>
                                    <li>Improved data streaming to the video player</li>
                                    <li>Revised the error code system</li>
                                    <li>Unified metrics into one cohesive system</li>
                                </ul>
                            </div>
                        </Card>
                    </TimelineEntry>
                </Timeline>
            </div>
        );
    }
}

export default Career;
