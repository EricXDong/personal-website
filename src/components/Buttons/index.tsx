import * as React from 'react';

import '../../animations/fade-in-down.css';
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

export const FormButton = (props: React.InputHTMLAttributes<{}> & ButtonProps) => (
    <input
        type="submit"
        className={`ph3 pv2 br2 bg-black-40 ba b--white-50 pointer dim ${props.extraclasses}`}
        {...props}
    />
);
