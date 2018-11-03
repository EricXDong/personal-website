import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Snackbar } from '@material-ui/core';

import { Banner } from 'src/state/reducers/banners';
import { removeBanner } from 'src/state/actions';

interface BannerComponentPropsFromDispatch {
    removeBanner: (id: string) => {};
}

interface BannerComponentProps extends BannerComponentPropsFromDispatch {
    banner: Banner;
}

interface BannerComponentState {
    isOpen: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch): BannerComponentPropsFromDispatch => ({
    removeBanner: (id: string) => dispatch(removeBanner(id)),
});
WORKING ON BANNERS
class BannerComponent extends React.Component<BannerComponentProps, BannerComponentState> {
    constructor(props: BannerComponentProps) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    public onClose = () => {
        this.setState({
            isOpen: false,
        });
        setTimeout(() => this.props.removeBanner(this.props.banner.id), 1000);
    };

    public render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.isOpen}
                message={this.props.banner.message}
                autoHideDuration={1000}
                onClose={this.onClose}
            />
        );
    }
}

export default connect(mapDispatchToProps)(BannerComponent);
