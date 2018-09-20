import * as React from 'react';

import TimelineBubble from '../TimelineBubble';
import './timeline-entry.css';

export enum TimelineEntrySizes {
    SMALL,
    MEDIUM,
    LARGE,
}

interface TimelineEntryProps {
    entryAboveIcon?: boolean;
    icon?: string;
    expandOnHover?: boolean;
    size?: TimelineEntrySizes;
}

interface TimelineEntryState {
    didHover: boolean;
}

class TimelineEntry extends React.Component<TimelineEntryProps, TimelineEntryState> {
    public static defaultProps: TimelineEntryProps = {
        entryAboveIcon: true,
        icon: '',
        expandOnHover: true,
        size: TimelineEntrySizes.MEDIUM,
    };

    constructor(props: TimelineEntryProps) {
        super(props);
        this.state = {
            didHover: false,
        };
    }

    public onHover = () =>
        this.setState({
            didHover: this.props.expandOnHover !== undefined ? this.props.expandOnHover : true,
        });

    public onHoverExit = () => this.setState({ didHover: false });

    public render() {
        let expandWidth;
        let expandHeight;
        switch (this.props.size) {
            case TimelineEntrySizes.SMALL:
                expandWidth = '18vw';
                expandHeight = '19vh';
                break;
            case TimelineEntrySizes.MEDIUM:
                expandWidth = '20vw';
                expandHeight = '21vh';
                break;
            case TimelineEntrySizes.LARGE:
                expandWidth = '22vw';
                expandHeight = '26vh';
                break;
            default:
                expandWidth = '20vw';
                expandHeight = '21vh';
        }

        const expandTopStyle = {
            transform: 'translateY(-10%)',
            width: expandWidth,
            height: expandHeight,
        };
        const expandBtmStyle = {
            transform: 'translateY(10%)',
            width: expandWidth,
            height: expandHeight,
        };
        return (
            <div className="flex flex-column items-center">
                {this.props.entryAboveIcon ? (
                    <>
                        <div
                            className="mb3 flex items-end justify-center entry-children"
                            style={this.state.didHover ? expandTopStyle : {}}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHoverExit}
                        >
                            {this.props.children}
                        </div>
                        <TimelineBubble icon={this.props.icon} />
                    </>
                ) : (
                    <>
                        <TimelineBubble icon={this.props.icon} />
                        <div
                            className="mt3 flex items-end justify-center entry-children"
                            style={this.state.didHover ? expandBtmStyle : {}}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHoverExit}
                        >
                            {this.props.children}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default TimelineEntry;
