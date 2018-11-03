import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

const palette = {
    primary: {
        light: fade(grey[50], 0.5),
        main: fade(grey[50], 0.9),
    },
    secondary: {
        light: amber[200],
        main: amber[500],
    },
};

export default () =>
    createMuiTheme({
        palette,
        overrides: {
            MuiOutlinedInput: {
                root: {
                    color: palette.primary.main,
                    borderColor: palette.primary.main,
                    backgroundColor: fade(grey[900], 0.4),
                    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                        borderColor: palette.primary.main,
                    },
                },
                notchedOutline: {
                    borderColor: palette.primary.main,
                },
            },
            MuiFormLabel: {
                root: {
                    color: palette.primary.main,
                },
            },
        },
    });
