import * as React from 'react';

import '../../animations/fade-in-down.css';
import './buttons.css';

interface BasicButtonProps {
    extraclasses?: string;
}

export const BasicButton = (props: React.InputHTMLAttributes<{}> & BasicButtonProps) => (
    <button
        className={`relative f3 fw1 bg-transparent white bn pointer tracked dim ph0 pv1 intro fade-in-down
            ${props.extraclasses || ''}`}
        {...props}
    />
);
