import * as React from 'react';
import { Typography } from '@material-ui/core';

import Carousel from './Carousel';
import CarouselEntry from './Carousel/CarouselEntry';

class Projects extends React.Component {
    public render() {
        return (
            <Carousel>
                <CarouselEntry>
                    <iframe src="assets/minesweeper/index.html" className="w-100 h-100 bn" />
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
