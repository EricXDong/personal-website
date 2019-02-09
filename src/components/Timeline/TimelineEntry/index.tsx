import * as React from 'react';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';

import TimelineBubble from '../TimelineBubble';
import './timeline-entry.css';

export enum TimelineEntrySizes {
    SMALL,
    KINDA_SMALL,
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
                expandWidth = '20rem';
                expandHeight = '12rem';
                break;
            case TimelineEntrySizes.KINDA_SMALL:
                expandWidth = '22rem';
                expandHeight = '14rem';
                break;
            case TimelineEntrySizes.MEDIUM:
                expandWidth = '24rem';
                expandHeight = '16rem';
                break;
            case TimelineEntrySizes.LARGE:
                expandWidth = '26rem';
                expandHeight = '18rem';
                break;
            default:
                expandWidth = '24rem';
                expandHeight = '16rem';
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
                            className="relative mb3 flex items-end justify-center entry-children"
                            style={this.state.didHover ? expandTopStyle : {}}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHoverExit}
                        >
                            {this.props.children}
                            {this.props.expandOnHover && !this.state.didHover && (
                                <div className="absolute bottom-0 right-0 mr2">
                                    <KeyboardArrowDownIcon className="white-60" />
                                </div>
                            )}
                        </div>
                        <TimelineBubble icon={this.props.icon} />
                    </>
                ) : (
                    <>
                        <TimelineBubble icon={this.props.icon} />
                        <div
                            className="relative mt3 flex items-end justify-center entry-children"
                            style={this.state.didHover ? expandBtmStyle : {}}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHoverExit}
                        >
                            {this.props.children}
                            {this.props.expandOnHover && !this.state.didHover && (
                                <div className="absolute bottom-0 right-0 mr2">
                                    <KeyboardArrowDownIcon className="white-60" />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default TimelineEntry;
