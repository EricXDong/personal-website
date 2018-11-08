import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Snackbar, SnackbarContent, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import { Banner, BannerTypes } from 'src/state/reducers/banners';
import { removeBanner } from 'src/state/actions';

interface BannerComponentPropsFromDispatch {
    removeBanner: (id: string) => {};
}

const styles = (theme: Theme) =>
    createStyles({
        info: {
            backgroundColor: theme.palette.secondary.dark,
        },
        warning: {
            backgroundColor: theme.palette.secondary.main,
        },
        error: {
            backgroundColor: theme.palette.error.main,
        },
    });

interface BannerComponentProps extends BannerComponentPropsFromDispatch, WithStyles<typeof styles> {
    banner: Banner;
}

interface BannerComponentState {
    isOpen: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch): BannerComponentPropsFromDispatch => ({
    removeBanner: (id: string) => dispatch(removeBanner(id)),
});

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
        let snackClass;
        let iconComponent;
        switch (this.props.banner.type) {
            case BannerTypes.INFO:
                snackClass = this.props.classes.info;
                iconComponent = <InfoIcon />;
                break;
            case BannerTypes.WARNING:
                snackClass = this.props.classes.warning;
                iconComponent = <WarningIcon />;
                break;
            case BannerTypes.ERROR:
                snackClass = this.props.classes.error;
                iconComponent = <ErrorIcon />;
                break;
        }

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.isOpen}
                autoHideDuration={4000}
                onClose={this.onClose}
            >
                <SnackbarContent
                    className={snackClass}
                    message={
                        <span className="flex items-center">
                            {iconComponent}
                            <span className="ml3">{this.props.banner.message}</span>
                        </span>
                    }
                />
            </Snackbar>
        );
    }
}

export default withStyles(styles)(
    connect(
        null,
        mapDispatchToProps
    )(BannerComponent)
);
