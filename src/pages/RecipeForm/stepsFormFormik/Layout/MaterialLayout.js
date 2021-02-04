import {theme, useStyle} from './styles';
import {CssBaseline, Paper} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';

export default function MaterialLayout(props) {
    const {children} = props;
    const classes = useStyle();
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={classes.rootForm}>
                    <Paper className={classes.paperForm}>{children}</Paper>
                </div>
            </ThemeProvider>
        );
}


