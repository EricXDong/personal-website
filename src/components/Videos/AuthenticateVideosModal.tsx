import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    Modal,
    TextField,
    WithStyles,
    createStyles,
    withStyles,
    Button,
    Zoom,
    Tooltip,
    MuiThemeProvider,
    createMuiTheme,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Card from 'src/components/Card';
import { authenticateVideos, setPath } from 'src/state/actions';
import postVideoAuth from 'src/http/post-video-auth';
import getTheme, { palette } from 'src/util/get-theme';
import { NavigationPaths } from 'src/const/navigation';
import 'src/common.css';

interface AuthenticateVideosModalPropsFromDispatch {
    authenticateVideos: (isAuthenticated: boolean) => {};
    navigateHome: () => {};
}

type AuthenticateVideosModalProps = AuthenticateVideosModalPropsFromDispatch & WithStyles<typeof styles>;

interface AuthenticateVideosModalState {
    isOpen: boolean;
    password: string;
    isInvalidPassword: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch): AuthenticateVideosModalPropsFromDispatch => ({
    authenticateVideos: (isAuthenticated: boolean) => dispatch(authenticateVideos(isAuthenticated)),
    navigateHome: () => dispatch(setPath(NavigationPaths.HOME)),
});

class AuthenticateVideosModal extends React.Component<AuthenticateVideosModalProps, AuthenticateVideosModalState> {
    constructor(props: AuthenticateVideosModalProps) {
        super(props);
        this.state = {
            isOpen: true,
            password: '',
            isInvalidPassword: false,
        };
    }

    public onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({
            password: e.target.value,
            isInvalidPassword: false,
        });

    public onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postVideoAuth(this.state.password).then(response => {
            if (response.status === 200) {
                this.props.authenticateVideos(true);
            } else {
                this.setState({
                    isInvalidPassword: true,
                });
            }
        });
    };

    public render() {
        const tooltip = `If you'd like to access this page, shoot me a message and I'll be happy to provide the password.`;
        //  Use this theme for showing errors since the default theme overwrites colors to be white
        const errorTheme = createMuiTheme({
            overrides: {
                MuiOutlinedInput: {
                    root: {
                        color: palette.primary.main,
                    },
                },
                MuiInputBase: {
                    inputType: {
                        height: 'auto',
                    },
                },
            },
        });
        return (
            <Modal open={this.state.isOpen} disableAutoFocus={true} BackdropProps={{ classes: { root: this.props.classes.backdrop}}}>
                <Card extraclasses="w-20 flex items-center absolute-center">
                    <form className="flex flex-column w-100" onSubmit={this.onSubmit}>
                        <MuiThemeProvider theme={this.state.isInvalidPassword ? errorTheme : getTheme()}>
                            <Tooltip
                                TransitionComponent={Zoom}
                                title={tooltip}
                                placement="right"
                                classes={{ tooltip: this.props.classes.tooltip }}
                            >
                                <TextField
                                    label="Enter Password"
                                    type="password"
                                    variant="outlined"
                                    className={this.props.classes.pwWidth}
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    error={this.state.isInvalidPassword}
                                />
                            </Tooltip>
                        </MuiThemeProvider>
                        <div className="flex justify-between mt3">
                            <Button variant="outlined" color="primary" size="large" onClick={this.props.navigateHome}>
                                <HomeIcon classes={{ root: this.props.classes.mr }} />
                                Go home
                            </Button>
                            <Button variant="outlined" type="submit" color="primary" size="large">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Card>
            </Modal>
        );
    }
}

const styles = () =>
    createStyles({
        pwWidth: { width: '100%' },
        mr: { marginRight: '0.5rem' },
        ml: { marginLeft: '0.5rem' },
        tooltip: { fontSize: '1rem' },
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
    });

export default withStyles(styles)(
    connect(
        null,
        mapDispatchToProps
    )(AuthenticateVideosModal)
);
