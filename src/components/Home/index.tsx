import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles';

import { TransitionProps } from 'src/const/transition';
import skills from 'src/const/skills';
import 'src/animations/blur-out.css';
import 'src/animations/fade-in.css';
import 'src/animations/fade-in-left.css';
import 'src/animations/fade-in-right.css';
import 'src/animations/fade-in-up.css';
import 'src/common.css';
import './home.css';

type HomeProps = TransitionProps & WithStyles<typeof styles>;

const Home: React.SFC<HomeProps> = ({ exit, classes }) => (
    <div>
        <div className={`absolute w-80 white home ${exit ? 'blur-out' : ''}`}>
            <p className="tc mb2 huge-font fade-in-left">Eric Dong</p>
            <div className="flex items-center justify-center">
                <span className="bb b--white bw1 w-20 fade-in-left" />
                <Typography className={classes.secondaryMain}>
                    <span className="mh3 far fa-square rotate fade-in" />
                </Typography>
                <span className="bb b--white bw1 w-20 fade-in-right" />
            </div>
            <p className="tc f1 mt2 thin-font fade-in-right">Full stack web developer</p>
        </div>
        <div className={`w-100 absolute bottom-0 pb4 ph7 flex justify-around ${exit ? 'blur-out' : 'fade-in-up'}`}>
            {skills.map(skill => (
                <a href={skill.url} target="_blank" className="flex items-center">
                    <img src={skill.src} width="80" className="skill-logo" />
                </a>
            ))}
        </div>
    </div>
);

const styles = (theme: Theme) =>
    createStyles({
        secondaryMain: { color: theme.palette.secondary.main },
    });

export default withStyles(styles)(Home);
