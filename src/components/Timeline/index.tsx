import * as React from 'react';

import './timeline.css';
import 'src/animations/fade-in-right.css';

interface TimelineProps {
    extraclasses?: string;
}

const getDelayStyle = (idx: number) => ({
    animationDelay: `${idx / 5 + 0.5}s`,
});

const Timeline: React.SFC<TimelineProps> = props => {
    let children: any = [];
    if (props.children && Array.isArray(props.children)) {
        children = props.children;
    } else if (props.children) {
        children = [props.children];
    }
    return (
        <div>
            <div className="h3 relative">
                <hr className="absolute w-100 ma0 z-0 horizontal-line" />
                <div className="relative h-100 flex items-center justify-between z-1">
                    {children.map((child: any, i: number) => {
                        return (
                            <div
                                className={`dib w1 white ${i % 2 === 0 ? 'self-end' : 'self-start'} fade-in-right`}
                                style={getDelayStyle(i)}
                            >
                                {React.cloneElement(
                                    child,
                                    Object.assign({}, child.props, { entryAboveIcon: i % 2 === 0 })
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
