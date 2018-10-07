import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

export default () =>
    createMuiTheme({
        palette: {
            primary: {
                light: fade(grey[50], 0.5),
                main: grey[50],
                dark: grey[900],
            },
            secondary: {
                light: amber[200],
                main: amber[500],
            },
        },
    });
