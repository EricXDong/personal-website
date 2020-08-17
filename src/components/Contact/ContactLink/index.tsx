import * as React from 'react';

import openLink from 'src/util/open-link';

interface ContactLinkProps {
    icon: string;
    url: string;
}

export default ({ icon, url }: ContactLinkProps) => (
    <button className="pointer grow w4 h4 br-100 bn bg-transparent" onClick={openLink.bind(null, url)}>
        <img src={icon} style={{ width: '80px', height: '80px' }} />
    </button>
);
