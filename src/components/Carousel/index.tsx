import * as React from 'react';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import { withStyles, createStyles, WithStyles } from '@material-ui/core';

import 'src/animations/slide-out-right.css';
import 'src/animations/slide-out-left.css';
import 'src/animations/slide-in-right.css';
import 'src/animations/slide-in-left.css';
import 'src/common.css';

interface CarouselProps extends WithStyles<typeof styles> {
    children?: React.ReactChild[] | React.ReactChild;
}

interface CarouselState {
    currentIdx: number;
    inIdx?: number;
    outIdx?: number;
    transitionLeft?: boolean;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
    public transitionTime = 500; //  In ms

    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            currentIdx: 0,
        };
    }

    public numChildren = () => {
        const children = this.props.children;
        const entries = Array.isArray(children) ? children : [children];
        return entries.length;
    };

    public clampIdx = (idx: number) => {
        if (idx < 0) {
            return this.numChildren() + idx;
        } else if (idx >= this.numChildren()) {
            return 0 + idx - this.numChildren();
        }
        return idx;
    };

    public nextEntry = () => {
        const nextIdx = this.clampIdx(this.state.currentIdx + 1);
        this.setState({
            currentIdx: nextIdx,
            inIdx: nextIdx,
            outIdx: this.state.currentIdx,
            transitionLeft: true,
        });
        setTimeout(
            () =>
                this.setState({
                    inIdx: undefined,
                    outIdx: undefined,
                }),
            this.transitionTime
        );
    };

    public previousEntry = () => {
        const nextIdx = this.clampIdx(this.state.currentIdx - 1);
        this.setState({
            currentIdx: nextIdx,
            inIdx: nextIdx,
            outIdx: this.state.currentIdx,
            transitionLeft: false,
        });
        setTimeout(
            () =>
                this.setState({
                    inIdx: undefined,
                    outIdx: undefined,
                }),
            this.transitionTime
        );
    };

    public render() {
        const { flexGrow, rotate180, navArrows, h100 } = this.props.classes;
        const children = this.props.children;
        const entries = (Array.isArray(children) ? children : [children]) as React.ReactNodeArray;
        return (
            <div className="w-100 flex">
                <ArrowRight
                    fontSize="large"
                    className={`pointer ${rotate180} ${h100}`}
                    classes={{ root: navArrows }}
                    onClick={this.previousEntry}
                />
                <div className={`flex flex-column items-center ${flexGrow}`}>
                    {this.state.inIdx !== undefined && this.state.outIdx !== undefined ? (
                        <div className={`relative w-100 h-100 ${flexGrow}`}>
                            <div
                                className={`w-100 absolute ${
                                    this.state.transitionLeft ? 'slide-in-left' : 'slide-in-right'
                                }`}
                            >
                                {entries[this.state.inIdx]}
                            </div>
                            <div
                                className={`w-100 absolute ${
                                    this.state.transitionLeft ? 'slide-out-left' : 'slide-out-right'
                                }`}
                            >
                                {entries[this.state.outIdx]}
                            </div>
                        </div>
                    ) : (
                        <div className={`w-100 h-100 ${flexGrow}`}>{entries[this.state.currentIdx]}</div>
                    )}
                    <div>
                        {entries.map((_, i) => (
                            <span className={`${i === this.state.currentIdx ? 'fas': 'far'} fa-square white rotate mh3`} />
                        ))}
                    </div>
                </div>
                <ArrowRight
                    fontSize="large"
                    className={`pointer ${h100}`}
                    classes={{ root: navArrows }}
                    onClick={this.nextEntry}
                />
            </div>
        );
    }
}

const styles = () =>
    createStyles({
        flexGrow: {
            flexGrow: 1,
        },
        rotate180: {
            transform: 'rotate(180deg)',
        },
        navArrows: {
            color: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
                color: 'white',
            }
        },
        h100: {
            height: '100%',
        }
    });

export default withStyles(styles)(Carousel);
