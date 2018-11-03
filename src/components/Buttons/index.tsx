import * as React from 'react';

import 'src/animations/fade-in-down.css';
import './buttons.css';

interface ButtonProps {
    extraclasses?: string;
}

export const BasicButton = (props: React.InputHTMLAttributes<{}> & ButtonProps) => (
    <button
        className={`relative f3 fw1 bg-transparent white bn pointer tracked dim ph0 pv1 intro fade-in-down
            ${props.extraclasses || ''}`}
        {...props}
    />
);
