import * as React from 'react';

import TimelineEntry from './TimelineEntry';
import './timeline.css';

interface TimelineProps {
    extraclasses?: string;
    children?: React.ReactElement<TimelineEntry> | Array<React.ReactElement<TimelineEntry>>;
}

class Timeline extends React.Component<TimelineProps> {
    public render() {
        const verticalLine = <div className="absolute bl b--white h5 z-0 vertical-line" />;
        let children: any = [];
        if (this.props.children && Array.isArray(this.props.children)) {
            children = this.props.children;
        } else if (this.props.children) {
            children = [this.props.children];
        }
        return (
            <div className="relative">
                {verticalLine}
                <div className="flex flex-column relative z-1">
                    {children.map((entry: any) => (
                        <>
                            {entry}
                            <div className="mv3" />
                        </>
                    ))}
                </div>
            </div>
        );
    }
}

export default Timeline;
