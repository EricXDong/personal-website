import * as React from 'react';

import TimelineBubble from '../TimelineBubble';
import '../../../animations/fade-in-left.css';
import '../../../animations/fade-in-right.css';
import './timeline-entry.css';

interface TimelineEntryProps {
    timestamp: string;
    animationDelay?: number;
    icon?: string;
    children?: React.ReactNode | React.ReactNode[];
}

interface TimelineEntryState {
    beginAnimation: boolean;
}

class TimelineEntry extends React.Component<TimelineEntryProps, TimelineEntryState> {
    constructor(props: TimelineEntryProps) {
        super(props);
        this.state = {
            beginAnimation: false,
        };
    }

    public componentDidMount() {
        setTimeout(
            () =>
                this.setState({
                    beginAnimation: true,
                }),
            this.props.animationDelay || 0
        );
    }

    public render() {
        return (
            <div className={`flex items-center white`}>
                <span className={`mr2 tr normal timestamp ${this.state.beginAnimation ? 'fade-in-left' : 'hide'}`}>
                    {this.props.timestamp}
                </span>
                <div className="bubble">
                    <TimelineBubble icon={this.props.icon} />
                </div>
                <div className={this.state.beginAnimation ? 'fade-in-right' : 'hide'}>{this.props.children}</div>
            </div>
        );
    }
}

export default TimelineEntry;
