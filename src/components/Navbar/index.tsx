import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../../state/reducers';
import { setPath } from '../../state/actions';
import { NavigationPaths } from '../../const/navigation';
import { BasicButton } from '../../components/Buttons';
import './navbar.css';

interface NavbarPropsFromState {
    path: NavigationPaths;
}

interface NavbarPropsFromDispatch {
    setPath: (path: NavigationPaths) => {};
}

type NavbarProps = NavbarPropsFromState & NavbarPropsFromDispatch;

const mapStateToProps = (state: RootState) => ({
    path: state.navigation.path,
});

const mapDispatchToProps = (dispatch: Dispatch): NavbarPropsFromDispatch => ({
    setPath: (path: NavigationPaths) => dispatch(setPath(path)),
});

class Navbar extends React.Component<NavbarProps> {
    public setPath = (path: NavigationPaths) => this.props.setPath(path);

    public render() {
        return (
            <div className="fixed flex justify-between white w-100 ph7 pv5">
                {Object.keys(NavigationPaths).map(path => {
                    const style = {
                        animationDelay: `${Math.random()}s`,
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
