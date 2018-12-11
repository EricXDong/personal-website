import * as React from 'react';
import { Typography } from '@material-ui/core';

import Carousel from './Carousel';
import CarouselEntry from './Carousel/CarouselEntry';
import 'src/common.css';

interface ProjectsState {
    minesweeperURL: string;
}

class Projects extends React.Component<{}, ProjectsState> {
    public minesweeperIdx = 0;
    
    constructor(props: {}) {
        super(props);
        this.state = { minesweeperURL: 'assets/minesweeper/index.html' };
    }

    //  Makes transitions smoother since the game causes app to lag a little
    public onCarouselTransition = (prevIdx: number, nextIdx: number) => {
        if (prevIdx === this.minesweeperIdx) {
            this.setState({ minesweeperURL: '' })
        } else if (nextIdx === this.minesweeperIdx) {
            setTimeout(() => {
                this.setState({ minesweeperURL: 'assets/minesweeper/index.html' })
            }, 500);
        }
    }
    
    public render() {
        return (
            <Carousel onTransition={this.onCarouselTransition}>
                <CarouselEntry>
                    <div className="flex justify-center">
                        <div className="flex flex-column items-end">
                            <Typography variant="h6" color="primary">Game I made for fun! Give it a second to load.</Typography>
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
                    <Typography color="primary" variant="h1">
                        Slide 2
                    </Typography>
                </CarouselEntry>
                <CarouselEntry>
                    <Typography color="primary" variant="h1">
                        Slide 3
                    </Typography>
                </CarouselEntry>
            </Carousel>
        );
    }
}

export default Projects;
