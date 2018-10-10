import * as React from 'react';

interface CardProps {
    children?: React.ReactNode | React.ReactNode[];
    extraclasses?: string;
    style?: object;
}

export default (props: CardProps) => (
    <div className={`bg-black-50 ba bw1 b--black pa3 ${props.extraclasses}`} style={props.style || {}}>
        {props.children}
    </div>
);
