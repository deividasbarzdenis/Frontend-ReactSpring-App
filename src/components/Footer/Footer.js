import {makeStyles, Typography} from "@material-ui/core";
import {Copyright} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

const primary = green[300];
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: primary,
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Super Recipes
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Cool Recipes for everyone!
            </Typography>
            <Copyright />
        </footer>
        </>
    );
}

export default Footer;



