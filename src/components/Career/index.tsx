import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { TransitionProps } from '../../const/transition';
import Card from '../Card';
import Timeline from '../Timeline';
import TimelineEntry, { TimelineEntrySizes } from '../Timeline/TimelineEntry';
import h1Logo from '../../img/h1.svg';
import yahooLogo from '../../img/yahoo.svg';
import uscLogo from '../../img/usc.svg';
import getMuiStyles from '../../util/get-mui-styles';
import '../../animations/blur-out.css';
import '../../animations/uncover-right.css';

type CareerProps = TransitionProps & WithStyles<typeof getMuiStyles>;

class Career extends React.Component<CareerProps> {
    public render() {
        const spacing = {
            marginLeft: '10vw',
            marginRight: '10vw',
            paddingBottom: '10vh',
        };
        return (
            <div className={`fw1 self-center ${this.props.exit ? 'blur-out w-100' : 'uncover-right'}`} style={spacing}>
                <Timeline>
                    <TimelineEntry expandOnHover={false}>
                        <Typography variant="display1" color="primary" className="tc ma0">
                            Now
                        </Typography>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                September 2017
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Virgin Hyperloop One
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Full Time Software Engineer</i>
                            </Typography>
                            <ul className="mt4">
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Helped design and build a fully integrated simulation system
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Owned the web app for an internal cost optimization tool
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo} size={TimelineEntrySizes.KINDA_SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                June 2017
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Virgin Hyperloop One
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Software Intern</i>
                            </Typography>
                            <ul className="mt4">
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Worked on the company help system
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Integrated the help system with Github
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                May 2017
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Graduation
                                <i className="fas fa-graduation-cap ml2" />
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>M.S. Computer Science, General</i>
                            </Typography>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry size={TimelineEntrySizes.LARGE}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                October 2016
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Jibo project
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>With Professor David Barnhart</i>
                            </Typography>
                            <div className="mt4">
                                <Typography variant="subheading" color="primary">
                                    Engineering lead of a Jibo application.
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant="subheading" color="primary">
                                            Designed and built the project and its development/testing environment from
                                            scratch
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="subheading" color="primary">
                                            Managed a team of two developers and one researcher
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo} size={TimelineEntrySizes.SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                May 2016
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Yahoo!
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Technical Intern II</i>
                            </Typography>
                            <div className="mt4">
                                <Typography variant="subheading" color="primary">
                                    Owned the video player side of the Yahoo! Sports Reel project.
                                </Typography>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                May 2016
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Graduation
                                <i className="fas fa-graduation-cap ml2" />
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>B.S. Computer Science</i>
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Minor: Video Game Programming</i>
                            </Typography>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry size={TimelineEntrySizes.KINDA_SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                January 2016
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                BIRS
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Brain Injury Research System</i>
                            </Typography>
                            <div className="mt4">
                                <Typography variant="subheading" color="primary">
                                    Assisted a PhD group with building an early warning application for identifying
                                    victims of concussion.
                                </Typography>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={yahooLogo}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subheading" className={this.props.classes.secondaryLight}>
                                May 2015
                            </Typography>
                            <Typography variant="headline" color="primary" className="ma0">
                                Yahoo!
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Technical Intern I</i>
                            </Typography>
                            <ul className="mt4">
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Improved data streaming to the video player
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Revised the error code system
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subheading" color="primary">
                                        Unified metrics into one cohesive system
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                </Timeline>
            </div>
        );
    }
}

export default withStyles(getMuiStyles)(Career);
