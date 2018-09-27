import * as React from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import { RootState } from '../../state/reducers';
import { NavigationPaths, NavigationTypes, navigateTransitionTime } from '../../const/navigation';
import Home from '../Home';
import Career from '../Career';
import Contact from '../Contact';
import Videos from '../Videos';
import './app.css';

interface AppPropsFromState {
    path: NavigationTypes;
}

type AppProps = AppPropsFromState;

interface AppState {
    //  A map telling which section is transitioning out
    sectionsExiting: Map<NavigationPaths, boolean>;
}

const mapStateToProps = (state: RootState) => ({
    path: state.navigation.path,
});

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        const sectionsExiting: Map<NavigationPaths, boolean> = new Map();
        Object.keys(NavigationPaths).forEach(path => {
            sectionsExiting[path] = false;
        });
        this.state = {
            sectionsExiting,
        };
    }

    //  Duplicate the map for state transitions bc I'm a goodboi
    public duplicateSectionsExiting = () => {
        const newSectionsExiting: Map<NavigationPaths, boolean> = new Map();
        Object.keys(this.state.sectionsExiting).forEach(section => {
            newSectionsExiting[section] = this.state.sectionsExiting[section];
        });
        return newSectionsExiting;
    };

    public onNavigate = (oldPath: NavigationTypes) => {
        //  Set the flag so component can transition out
        let newSectionsExiting = this.duplicateSectionsExiting();
        newSectionsExiting[oldPath as NavigationPaths] = true;
        this.setState({
            sectionsExiting: newSectionsExiting,
        });
        //  Reset flag to false after transition time
        setTimeout(() => {
            newSectionsExiting = this.duplicateSectionsExiting();
            newSectionsExiting[oldPath as NavigationPaths] = false;
            this.setState({
                sectionsExiting: newSectionsExiting,
            });
        }, navigateTransitionTime);
    };

    public render() {
        return (
            <div className="sans-serif absolute w-100 h-100 app">
                <Navbar onNavigate={this.onNavigate} />
                <div className="flex items-center w-100 h-100">
                    {(() => {
                        switch (this.props.path) {
                            case NavigationPaths.HOME:
                                return <Home exit={this.state.sectionsExiting[NavigationPaths.HOME]} />;
                            case NavigationPaths.CAREER:
                                return <Career exit={this.state.sectionsExiting[NavigationPaths.CAREER]} />;
                            case NavigationPaths.VIDEOS:
                                return <Videos exit={this.state.sectionsExiting[NavigationPaths.VIDEOS]} />;
                            case NavigationPaths.CONTACT:
                                return <Contact exit={this.state.sectionsExiting[NavigationPaths.CONTACT]} />;
                            default:
                                return null;
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
