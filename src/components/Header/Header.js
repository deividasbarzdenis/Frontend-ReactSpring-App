import {NavLink} from "react-router-dom";
import {AppBar, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import {Home} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

const primary = green[300];
const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: primary,
    },
}));
const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" component="nav" className={classes.navbar}>
            <Toolbar>
                <NavLink exact to="/home">
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large"/>
                    </IconButton>
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/recipe/form">Add Recipe</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}

export default Header;



