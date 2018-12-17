import * as React from 'react';
import { Typography } from '@material-ui/core';

import { TransitionProps } from 'src/const/transition';
import Carousel from './Carousel';
import CarouselEntry from './Carousel/CarouselEntry';
import 'src/common.css';
import 'src/animations/fade-in-down.css';
import 'src/animations/blur-out.css';

interface ProjectsState {
    minesweeperURL: string;
}

type ProjectsProps = TransitionProps;

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
        return (
            <Carousel
                onTransition={this.onCarouselTransition}
                className={this.props.exit ? 'blur-out' : 'fade-in-down'}
            >
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

export default Projects;
