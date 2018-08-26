import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../state/reducers';
import { setPath } from '../state/actions';
import { NavigationPaths } from '../const/navigation';
import { BasicButton } from '../components/Buttons';

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
    public render() {
        return (
            <div className="fixed flex justify-between white w-100 ph7 pv5">
                {Object.keys(NavigationPaths).map((path, i) => {
                    const style = {
                        animationDelay: `${Math.random()}s`,
                    };
                    return (
                        <BasicButton key={path} style={style}>
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
