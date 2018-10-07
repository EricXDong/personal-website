import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../../state/reducers';
import { setPath } from '../../state/actions';
import { NavigationPaths, navigateTransitionTime, NavigationTypes } from '../../const/navigation';
import { BasicButton } from '../../components/Buttons';
import './navbar.css';

interface NavbarPropsFromState {
    path: NavigationTypes;
}

interface NavbarPropsFromDispatch {
    setPath: (path: NavigationTypes) => {};
}

interface NavbarProps extends NavbarPropsFromState, NavbarPropsFromDispatch {
    onNavigate: (oldPath: NavigationTypes) => void;
}

const mapStateToProps = (state: RootState) => ({
    path: state.navigation.path,
});

const mapDispatchToProps = (dispatch: Dispatch): NavbarPropsFromDispatch => ({
    setPath: (path: NavigationTypes) => dispatch(setPath(path)),
});

class Navbar extends React.Component<NavbarProps> {
    public componentDidMount() {
        this.setPath(NavigationPaths.VIDEOS);
    }

    public setPath = (path: NavigationTypes) => {
        if (path !== this.props.path) {
            this.props.onNavigate(this.props.path);
            setTimeout(() => this.props.setPath(path), navigateTransitionTime);
        }
    };

    public render() {
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
                            onClick={this.setPath.bind(this, NavigationPaths[path])}
                        >
                            {NavigationPaths[path]}
                        </BasicButton>
                    );
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
