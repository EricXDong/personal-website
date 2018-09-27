import * as React from 'react';

interface ContactLinkProps {
    icon: string;
    url: string;
}

const openLink = (url: string) => window.open(url, '_blank');

export default ({ icon, url }: ContactLinkProps) => (
    <button className="pointer grow w4 h4 br-100 bn bg-transparent" onClick={openLink.bind(null, url)}>
        <img src={icon} style={{ width: '80px', height: '80px' }} />
    </button>
);
