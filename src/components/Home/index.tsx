import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, Theme, createStyles, withWidth, Grid } from '@material-ui/core';

import ScreenSize from 'src/const/screen-size';
import { TransitionProps } from 'src/const/transition';
import skills from 'src/const/skills';
import 'src/animations/blur-out.css';
import 'src/animations/fade-in.css';
import 'src/animations/fade-in-left.css';
import 'src/animations/fade-in-right.css';
import 'src/animations/fade-in-up.css';
import 'src/common.css';
import './home.css';

interface HomeProps extends TransitionProps, WithStyles<typeof styles> {
    width: string;
}

const Home: React.SFC<HomeProps> = ({ exit, classes, width }) => {
    const isBigScreen = width === ScreenSize.MD || width === ScreenSize.LG || width === ScreenSize.XL;
    return (
        <div>
            <div className={`absolute w-80 white ${exit ? 'blur-out' : ''} ${isBigScreen ? 'home' : 'home-sm'}`}>
                <Typography
                    variant="h2"
                    color="primary"
                    className={`${classes.name} ${isBigScreen ? classes.bigName : ''} fade-in-left`}
                >
                    Eric Dong
                </Typography>
                <div className="flex items-center justify-center mv3">
                    <span className={`bb b--white bw1 fade-in-left ${isBigScreen ? 'w-20' : 'w-40'}`} />
                    <Typography className={classes.secondaryMain}>
                        <span className="mh3 far fa-square rotate fade-in" />
                    </Typography>
                    <span className={`bb b--white bw1 fade-in-right ${isBigScreen ? 'w-20' : 'w-40'}`} />
                </div>
                <Typography
                    variant={isBigScreen ? 'h3' : 'h5'}
                    color="primary"
                    className={`${classes.occupation} fade-in-right`}
                >
                    Full stack web developer
                </Typography>
            </div>
            {isBigScreen ? (
                <div
                    className={`w-100 absolute bottom-0 pb4 ph7 flex justify-around ${
                        exit ? 'blur-out' : 'fade-in-up'
                    }`}
                >
                    {skills.map(skill => (
                        <a href={skill.url} target="_blank" className="flex items-center">
                            <img src={skill.src} width="80" className="skill-logo" />
                        </a>
                    ))}
                </div>
            ) : (
                <div className={`w-100 absolute bottom-0 pa4 ${exit ? 'blur-out' : 'fade-in-up'}`}>
                    <Grid container={true} spacing={32} className={classes.skillsGrid}>
                        {skills.map(skill => (
                            <Grid item={true}>
                                <a href={skill.url} target="_blank" className="flex items-center">
                                    <img src={skill.src} width="45" className={classes.opacity50} />
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

const styles = (theme: Theme) =>
    createStyles({
        secondaryMain: { color: theme.palette.secondary.main },
        name: {
            textAlign: 'center',
            fontWeight: 100,
        },
        bigName: {
            fontSize: '8rem',
        },
        occupation: {
            textAlign: 'center',
            fontFamily: 'Raleway-Light, Arial, Helvetica, sans-serif',
        },
        opacity50: {
            opacity: 0.5,
        },
        skillsGrid: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

export default withWidth()(withStyles(styles)(Home));
