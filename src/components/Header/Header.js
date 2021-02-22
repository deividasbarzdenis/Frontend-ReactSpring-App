import {NavLink} from "react-router-dom";
import {AppBar, Button, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import {Home} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";
import {removeJwt, removeUserData} from "../../store/slices/userSlice";
import useUser from "../../hooks/useUser";
import {useDispatch} from "react-redux";

const primary = green[300];
const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: primary,
    },
}));
const Header = () => {
    const classes = useStyles();
    const user = useUser() //leiadzia prisideti state is redux
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(removeJwt())
        dispatch(removeUserData())
    }

    return (
        <AppBar position="static" component="nav" className={classes.navbar} elevation={0}>
            <Toolbar>
                <NavLink exact to="/home">
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large"/>
                    </IconButton>
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/recipe/form">Add Recipe</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {
                        !!user ? (//!! pavercia i boolean javascript
                            <>
                            <li><NavLink to="/home" component={Button} onClick={logout}>Logout</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/signup">Sign Up</NavLink></li>
                            </>
                        )
                    }
                </ul>
            </Toolbar>
        </AppBar>
    );
}

export default Header;



