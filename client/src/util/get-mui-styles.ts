import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
    createStyles({
        primaryLight: { color: theme.palette.primary.light },
        primaryMain: { color: theme.palette.primary.main },
        primaryDark: { color: theme.palette.primary.dark },
        secondaryLight: { color: theme.palette.secondary.light },
        secondaryMain: { color: theme.palette.secondary.main },
    });
