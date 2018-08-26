import * as React from 'react';

import Navbar from '../Navbar';
import './app.css';

class App extends React.Component {
    public render() {
        return (
            <div className="sans-serif absolute w-100 h-100 app">
                <Navbar />
            </div>
        );
    }
}

export default App;
