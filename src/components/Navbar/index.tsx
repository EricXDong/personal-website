import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    withWidth,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Button,
    withStyles,
    WithStyles,
    createStyles
} from '@material-ui/core';
import BurgerIcon from '@material-ui/icons/Dehaze';

import ScreenSize from 'src/const/screen-size';
import { RootState } from 'src/state/reducers';
import { setPath } from 'src/state/actions';
import { NavigationPaths, navigateTransitionTime, NavigationTypes, disableOnSmallScreen } from 'src/const/navigation';
import { BasicButton } from 'src/components/Buttons';
import NavItemWithTooltip from './NavItemWithTooltip';
import './navbar.css';

interface NavbarPropsFromState {
    path: NavigationTypes;
}

interface NavbarPropsFromDispatch {
    setPath: (path: NavigationTypes) => {};
}

interface NavbarProps extends NavbarPropsFromState, NavbarPropsFromDispatch, WithStyles<typeof styles> {
    onNavigate: (oldPath: NavigationTypes) => void;
    width: string;
}

interface NavbarState {
    isDrawerShown: boolean;
}

const mapStateToProps = (state: RootState) => ({
    path: state.navigation.path,
});

const mapDispatchToProps = (dispatch: Dispatch): NavbarPropsFromDispatch => ({
    setPath: (path: NavigationTypes) => dispatch(setPath(path)),
});

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = { isDrawerShown: false };
    }

    public componentDidMount() {
        this.setPath(NavigationPaths.HOME)();
    }

    //  Open/close drawer
    public toggleDrawer = (shown: boolean) => () =>
        this.setState({
            isDrawerShown: shown,
        });

    //  Navigate the app
    public setPath = (path: NavigationTypes) => () => {
        if (path !== this.props.path) {
            this.props.onNavigate(this.props.path);
            setTimeout(() => this.props.setPath(path), navigateTransitionTime);
        }
    };

    //  Render normally or disabled and with a tooltip
    public renderNavItem = (path: NavigationPaths, isDisabled: boolean) => {
        const item = (
            <ListItem
                button={true}
                onClick={this.setPath(NavigationPaths[path])}
                disabled={isDisabled}
            >
                <ListItemText primary={NavigationPaths[path]} />
            </ListItem>
        );
        if (isDisabled) {
            return (
                <NavItemWithTooltip message="View on a larger screen for the full experience">
                    {item}
                </NavItemWithTooltip>
            )
        } else {
            return item;
        }
    }

    public render() {
        //  For small screens
        if (this.props.width === ScreenSize.XS || this.props.width === ScreenSize.SM) {
            return (
                <div>
                    <Button color="primary" onClick={this.toggleDrawer(true)} className={this.props.classes.drawerBtn}>
                        <BurgerIcon fontSize="large" />
                    </Button>
                    <SwipeableDrawer
                        open={this.state.isDrawerShown}
                        onOpen={this.toggleDrawer(true)}
                        onClose={this.toggleDrawer(false)}
                        classes={{ paper: this.props.classes.drawer }}
                    >
                        <List>
                            {Object.keys(NavigationPaths)
                                .map(path => this.renderNavItem(
                                    path as NavigationPaths,
                                    disableOnSmallScreen.indexOf(NavigationPaths[path]) > -1
                                ))
                            }
                        </List>
                    </SwipeableDrawer>
                </div>
            );
        }

        //  For big screens
        return (
            <div className="fixed flex justify-between white w-100 z-1 navbar-spacing">
                {Object.keys(NavigationPaths).map((path, i) => {
                    const style = {
                        animationDelay: `${i / 5}s`,
                    };
                    return (
                        <BasicButton
                            key={path}
                            style={style}
                            extraclasses={NavigationPaths[path] === this.props.path ? 'selected' : ''}
                            onClick={this.setPath(NavigationPaths[path])}
                        >
                            {NavigationPaths[path]}
                        </BasicButton>
                    );
                })}
            </div>
        );
    }
}

const styles = () =>
    createStyles({
        drawerBtn: {
            padding: '1rem',
        },
        drawer: {
            width: '30%',
            backgroundColor: 'rgb(200, 200, 200)',
        },
    });

export default withStyles(styles)(
    withWidth()(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(Navbar)
    )
);
