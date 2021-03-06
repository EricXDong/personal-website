import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles';

import { TransitionProps } from 'src/const/transition';
import Card from './Card';
import Timeline from './Timeline';
import TimelineEntry, { TimelineEntrySizes } from './Timeline/TimelineEntry';
import h1Logo from 'src/img/h1.svg';
import yahooLogo from 'src/img/yahoo.svg';
import uscLogo from 'src/img/usc.svg';
import googleLogo from 'src/img/google.svg';
import 'src/animations/blur-out.css';
import 'src/animations/uncover-right.css';

const styles = (theme: Theme) =>
    createStyles({
        primaryLight: { color: theme.palette.primary.light },
        secondaryLight: { color: theme.palette.secondary.light },
    });

type CareerProps = TransitionProps & WithStyles<typeof styles>;

class Career extends React.Component<CareerProps> {
    public render() {
        const spacing = {
            marginLeft: '10vw',
            marginRight: '10vw',
            paddingBottom: '10vh',
        };
        const hideTextMargin = {
            marginTop: '1.4rem',
        };
        return (
            <div className={`fw1 self-center ${this.props.exit ? 'blur-out w-100' : 'uncover-right'}`} style={spacing}>
                <Timeline>
                    <TimelineEntry size={TimelineEntrySizes.KINDA_SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                January 2016
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                BIRS
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Brain Injury Research System</i>
                            </Typography>
                            <div style={hideTextMargin}>
                                <Typography variant="subtitle1" color="primary">
                                    Assisted a PhD group with building an early warning application for identifying
                                    victims of concussion.
                                </Typography>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                May 2016
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
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
                    <TimelineEntry icon={yahooLogo} size={TimelineEntrySizes.SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                May 2016
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Yahoo!
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Technical Intern II</i>
                            </Typography>
                            <div style={hideTextMargin}>
                                <Typography variant="subtitle1" color="primary">
                                    Owned the video player side of the Yahoo! Sports Reel project.
                                </Typography>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry size={TimelineEntrySizes.LARGE}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                October 2016
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Jibo for Alzheimer's
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>With Professor David Barnhart</i>
                            </Typography>
                            <div style={hideTextMargin}>
                                <Typography variant="subtitle1" color="primary">
                                    Engineering lead of a Jibo application.
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant="subtitle1" color="primary">
                                            Designed and built the project from the ground up
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="subtitle1" color="primary">
                                            Managed a team of two developers and one researcher
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={uscLogo} expandOnHover={false}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                May 2017
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Graduation
                                <i className="fas fa-graduation-cap ml2" />
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>M.S. Computer Science, General</i>
                            </Typography>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo} size={TimelineEntrySizes.KINDA_SMALL}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                June 2017
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Virgin Hyperloop
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Software Intern</i>
                            </Typography>
                            <ul style={hideTextMargin}>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Worked on the company help system
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Integrated the help system with Github
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={h1Logo}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                September 2017
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Virgin Hyperloop
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Software Engineer</i>
                            </Typography>
                            <ul style={hideTextMargin}>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Designed and built a fully integrated simulation system
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Owned the web app for an internal cost optimization tool
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry icon={googleLogo}>
                        <Card extraclasses="h-100 w-100 overflow-hidden">
                            <Typography variant="subtitle1" className={this.props.classes.secondaryLight}>
                                March 2019
                            </Typography>
                            <Typography variant="h6" color="primary" className="ma0">
                                Google
                            </Typography>
                            <Typography variant="body1" className={this.props.classes.primaryLight}>
                                <i>Software Engineer</i>
                            </Typography>
                            <ul style={hideTextMargin}>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Owner of the team's performance metrics collection and analysis
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="subtitle1" color="primary">
                                        Lead design and implementation of multiple major new features
                                    </Typography>
                                </li>
                            </ul>
                        </Card>
                    </TimelineEntry>
                    <TimelineEntry expandOnHover={false}>
                        <Typography variant="h4" color="primary" className="tc ma0">
                            Now
                        </Typography>
                    </TimelineEntry>
                </Timeline>
            </div>
        );
    }
}

export default withStyles(styles)(Career);
