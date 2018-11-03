import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles';

import { TransitionProps } from 'src/const/transition';
import 'src/animations/blur-out.css';
import 'src/animations/fade-in.css';
import 'src/animations/fade-in-left.css';
import 'src/animations/fade-in-right.css';
import './home.css';

const styles = (theme: Theme) =>
    createStyles({
        secondaryMain: { color: theme.palette.secondary.main },
    });

type HomeProps = TransitionProps & WithStyles<typeof styles>;

const Home: React.SFC<HomeProps> = ({ exit, classes }) => (
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
);

export default withStyles(styles)(Home);
