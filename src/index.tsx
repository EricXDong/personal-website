import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'tachyons';
import 'typeface-roboto';
import 'isomorphic-fetch';

import App from './components/App';
import store from './state/reducers';
// import registerServiceWorker from './registerServiceWorker';
import getTheme from './util/get-theme';

const theme = getTheme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
