import * as React from 'react';
import { Snackbar } from '@material-ui/core';

import { Banner } from '../../state/reducers/banners';
import { RootState } from 'src/state/reducers';
import { connect } from 'react-redux';

interface BannersPropsFromState {
    banners: Banner[];
}

// interface BannersPropsFromDispatch {}

type BannersProps = BannersPropsFromState;

const mapStateToProps = (state: RootState) => ({
    banners: state.banners.banners,
});

// const mapDispatchToProps = (): BannersPropsFromDispatch => ({});

const Banners: React.SFC<BannersProps> = ({ banners }) => {
    return (
        <div>
            {banners.map(banner => (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={true}
                    message={banner.message}
                    autoHideDuration={500}
                />
            ))}
        </div>
    );
};

export default connect(mapStateToProps)(Banners);
