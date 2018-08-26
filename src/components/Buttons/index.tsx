import * as React from 'react';

import './buttons.css';

export const BasicButton = (props: React.InputHTMLAttributes<{}>) => {
    return (
        <button className="f3 fw1 bg-transparent white bn pointer dim tracked intro" {...props} />
    );
}
