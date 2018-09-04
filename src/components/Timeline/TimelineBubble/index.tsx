import * as React from 'react';

interface TimelineBubbleProps {
    icon?: string;
    extraclasses?: string;
}

export default (props: TimelineBubbleProps) => {
    const defaultClasses = `dib ba br-100 bw1 b--white bg-white flex items-center justify-center ${props.extraclasses}`;
    return props.icon ? (
        <div className={`w3 h3 ${defaultClasses}`}>
            <img src={props.icon} style={{ width: '50px', height: '50px' }} />
        </div>
    ) : (
        <div className={`w2 h2 ml3 ${defaultClasses}`} />
    );
};