import * as React from 'react';

import { Banner } from 'src/state/reducers/banners';
import { RootState } from 'src/state/reducers';
import { connect } from 'react-redux';
import BannerComponent from './BannerComponent';

interface BannersPropsFromState {
    banners: Banner[];
}

type BannersProps = BannersPropsFromState;

const mapStateToProps = (state: RootState) => ({
    banners: state.banners.banners,
});

const Banners: React.SFC<BannersProps> = props => {
    return (
        <div>
            {props.banners.map(banner => (
                <BannerComponent banner={banner} />
            ))}
        </div>
    );
};

export default connect(mapStateToProps)(Banners);
