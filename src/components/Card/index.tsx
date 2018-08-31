import * as React from 'react';

interface CardProps {
    children?: React.ReactNode | React.ReactNode[];
    extraclasses?: string;
}

export default (props: CardProps) => (
    <div className={`dib bg-black-50 ba bw1 b--black pa3 ${props.extraclasses}`}>
        {props.children}
    </div>
)
