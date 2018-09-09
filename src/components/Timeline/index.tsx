import * as React from 'react';

import TimelineEntry from './TimelineEntry';
import TimelineBubble from './TimelineBubble';
import './timeline.css';
import '../../animations/fade-in-right.css';

interface TimelineProps {
    extraclasses?: string;
    children?: React.ReactElement<TimelineEntry> | Array<React.ReactElement<TimelineEntry>>;
}

class Timeline extends React.Component<TimelineProps> {
    public getDelayStyle = (idx: number) => ({
        animationDelay: `${idx / 5 + 0.5}s`,
    });

    public render() {
        let children: any = [];
        if (this.props.children && Array.isArray(this.props.children)) {
            children = this.props.children;
        } else if (this.props.children) {
            children = [this.props.children];
        }
        return (
            <div className="h-50">
                <div className="flex justify-between">
                    {children.map((entry: TimelineEntry, i: number) => (
                        <div className={`relative w1 flex justify-center fade-in-right`} style={this.getDelayStyle(i)}>
                            <div className="flex flex-column justify-end">
                                {i % 2 === 0 && (
                                    <div className="mb4 white timeline-children">{entry.props.children}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center relative h3">
                    <hr className="absolute w-100 ma0 horizontal-line" />
                    {children.map((entry: TimelineEntry, i: number) => (
                        <div className={`relative w1 h3 fade-in-right`} style={this.getDelayStyle(i)}>
                            <TimelineBubble icon={entry.props.icon} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    {children.map((entry: TimelineEntry, i: number) => (
                        <div className={`relative w1 flex justify-center fade-in-right`} style={this.getDelayStyle(i)}>
                            <div className="flex flex-column justify-start">
                                {i % 2 === 1 && (
                                    <div className="mt4 white timeline-children">{entry.props.children}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Timeline;
