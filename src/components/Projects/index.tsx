import * as React from 'react';
import { Typography, withStyles, WithStyles, createStyles } from '@material-ui/core';

import openLink from 'src/util/open-link';
import { TransitionProps } from 'src/const/transition';
import Carousel from '../Carousel';
import CarouselEntry from '../Carousel/CarouselEntry';

import restaurantSearch from 'src/img/restaurant-search.png';
import lightenium from 'src/img/lightenium.jpg';

import 'src/common.css';
import './projects.css';
import 'src/animations/fade-in-down.css';
import 'src/animations/blur-out.css';

interface ProjectsState {
    minesweeperURL: string;
}

type ProjectsProps = TransitionProps & WithStyles<typeof styles>;

class Projects extends React.Component<ProjectsProps, ProjectsState> {
    public minesweeperIdx = 1;

    constructor(props: ProjectsProps) {
        super(props);
        this.state = { minesweeperURL: 'assets/minesweeper/index.html' };
    }

    //  Makes transitions smoother since the game causes app to lag a little
    public onCarouselTransition = (prevIdx: number, nextIdx: number) => {
        if (prevIdx === this.minesweeperIdx) {
            this.setState({ minesweeperURL: '' });
        } else if (nextIdx === this.minesweeperIdx) {
            setTimeout(() => {
                this.setState({ minesweeperURL: 'assets/minesweeper/index.html' });
            }, 500);
        }
    };

    public render() {
        const { restaurantSearchDescription } = this.props.classes;
        const restaurantSearchURL = 'https://www.amazon.com/Tea-Club-Restaurant-Search/dp/B07CN68V5P';
        const lighteniumURL = 'https://apps.apple.com/us/app/lightenium/id1466574775';
        return (
            <Carousel
                onTransition={this.onCarouselTransition}
                className={this.props.exit ? 'blur-out' : 'fade-in-down'}
            >
                <CarouselEntry>
                    <div className="flex flex-column justify-between h-100 ph6 pb6 pt3 apps">
                        <div className="flex">
                            <button className="pointer grow bn bg-transparent">
                                <img src={restaurantSearch} onClick={openLink.bind(null, restaurantSearchURL)} />
                            </button>
                            <div className="restaurant-search">
                                <Typography variant="h4" color="primary">
                                    Alexa Skill
                                </Typography>
                                <Typography variant="body1" color="primary" className={restaurantSearchDescription}>
                                    Use Alexa to find restaurants around you. Powered by Yelp Fusion API.
                                </Typography>
                            </div>
                        </div>
                        <div className="flex lightenium-container">
                            <div className="lightenium">
                                <Typography variant="h4" color="primary" align="right">
                                    iOS Game
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="primary"
                                    align="right"
                                    className={restaurantSearchDescription}
                                >
                                    For the chronically bored, a hyper casual game inspired by the simplistic
                                    addictiveness of Flappy Bird.
                                </Typography>
                            </div>
                            <button className="pointer grow bn bg-transparent">
                                <img src={lightenium} onClick={openLink.bind(null, lighteniumURL)} />
                            </button>
                        </div>
                    </div>
                </CarouselEntry>
                <CarouselEntry>
                    <div className="flex justify-center">
                        <div className="flex flex-column">
                            <Typography variant="h6" color="primary">
                                Remake of the classic game Minesweeper. Give it a second to load.
                            </Typography>
                            <iframe
                                src={this.state.minesweeperURL}
                                width="960"
                                height="600"
                                className={`bn ${this.state.minesweeperURL === '' ? 'bg-black-50' : ''}`}
                            />
                        </div>
                    </div>
                </CarouselEntry>
                <CarouselEntry>
                    <div className="flex justify-center">
                        <div className="flex flex-column">
                            <Typography variant="h6" color="primary">
                                Virtual Reality Garage Band
                            </Typography>
                            <Typography variant="body1" color="primary">
                                Created for Hack Music LA, this game allows you to adjust the volume of the various
                                instruments in a track as well as left/right pan.
                            </Typography>
                            <video width="924" height="510" controls={true}>
                                <source src="assets/vr-garage-band.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </CarouselEntry>
                <CarouselEntry>
                    <div className="flex justify-center pt7">
                        <Typography variant="h2" color="primary">
                            More to come!
                        </Typography>
                    </div>
                </CarouselEntry>
            </Carousel>
        );
    }
}

const styles = () =>
    createStyles({
        restaurantSearchDescription: {
            marginTop: '1rem',
        },
    });

export default withStyles(styles)(Projects);
