import * as React from 'react';

import '../../../common.css';

interface TimelineBubbleProps {
    icon?: string;
    extraclasses?: string;
}

export default (props: TimelineBubbleProps) => {
    const defaultClasses = `ba br-100 bw1 b--white bg-white flex items-center justify-center ${
        props.extraclasses
    } bubble`;
    return props.icon ? (
        <div className={`w3 h3 ${defaultClasses}`}>
            <img src={props.icon} style={{ width: '50px', height: '50px' }} />
        </div>
    ) : (
        <div className={`relative w3 h3`}>
            <div className={`w2 h2 ${defaultClasses} absolute-center`} />
        </div>
    );
};
