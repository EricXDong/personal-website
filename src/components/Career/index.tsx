import * as React from 'react';

import { TransitionProps } from '../../const/transition';
import Card from '../Card';
import Timeline from '../Timeline';
import TimelineEntry from '../Timeline/TimelineEntry';
import h1Logo from '../../img/h1.svg';
import yahooLogo from '../../img/yahoo.svg';
import uscLogo from '../../img/usc.svg';
import '../../animations/fade-out.css';
import '../../animations/uncover-down.css';
import '../../animations/cover-down.css';

type CareerProps = TransitionProps;

class Career extends React.Component<CareerProps> {
    public render() {
        const timelineEntries = [
            <TimelineEntry timestamp="Present" />,
            <TimelineEntry timestamp="Sep 2017" icon={h1Logo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Virgin Hyperloop One</p>
                    <span className="db f6 silver">
                        <i>Full Time Software Engineer</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="Jun 2017" icon={h1Logo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Virgin Hyperloop One</p>
                    <span className="db f6 silver">
                        <i>Software Intern</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="May 2017" icon={uscLogo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">
                        Graduation
                        <i className="fas fa-graduation-cap ml2" />
                    </p>
                    <span className="db f6 silver">
                        <i>M.S. Computer Science, General</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="Oct 2016">
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Alzheimer's Jibo project</p>
                    <span className="db f6 silver">
                        <i>With Professor David Barnhart</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="May 2016" icon={yahooLogo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Yahoo!</p>
                    <span className="db f6 silver">
                        <i>Technical Intern II</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="May 2016" icon={uscLogo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">
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
            </TimelineEntry>,
            <TimelineEntry timestamp="May 2015" icon={yahooLogo}>
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Yahoo!</p>
                    <span className="db f6 silver">
                        <i>Technical Intern I</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="May 2014">
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Mentor Graphics</p>
                    <span className="db f6 silver">
                        <i>Software Developer Intern</i>
                    </span>
                </Card>
            </TimelineEntry>,
            <TimelineEntry timestamp="May 1994">
                <Card extraclasses="ml3">
                    <p className="pa0 ma0 f3">Born</p>
                </Card>
            </TimelineEntry>,
        ];
        return (
            <div className={`ml6 fw1 ${this.props.exit ? 'cover-down' : 'uncover-down'}`}>
                <Timeline>
                    {timelineEntries.map((entry, i) => {
                        return React.cloneElement(entry, {
                            animationDelay: ((i / 5) + 0.5) * 1000,
                        });
                    })}
                </Timeline>
            </div>
        );
    }
}

export default Career;
