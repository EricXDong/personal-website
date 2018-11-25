import * as React from 'react';

interface CarouselEntryProps {
    children?: React.ReactChild[] | React.ReactChild;
}

class CarouselEntry extends React.Component<CarouselEntryProps> {
    public render() {
        return this.props.children;
    }
}

export default CarouselEntry;
