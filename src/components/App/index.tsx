import * as React from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import { RootState } from '../../state/reducers';
import { NavigationPaths } from '../../const/navigation';
import Home from '../Home';
import './app.css';

interface AppPropsFromState {
    path: NavigationPaths;
}

type AppProps = AppPropsFromState;

const mapStateToProps = (state: RootState) => ({
    path: state.navigation.path,
});

class App extends React.Component<AppProps> {
    public render() {
        return (
            <div className="sans-serif absolute w-100 h-100 app">
                <Navbar />
                <div className="section">
                    {(() => {
                        switch (this.props.path) {
                            case NavigationPaths.HOME:
                                return <Home />;
                            default:
                                return <Home />;
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
