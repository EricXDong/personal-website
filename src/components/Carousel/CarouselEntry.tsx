import * as React from 'react';

interface CarouselEntryProps {
    children: React.ReactNode[] | React.ReactNode;
}

const CarouselEntry: React.SFC<CarouselEntryProps> = ({ children }) => <>{children}</>;

export default CarouselEntry;
