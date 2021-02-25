import {AppBar, Button, makeStyles, Menu, MenuItem, Toolbar, useMediaQuery, useTheme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";
import {useState} from "react";
import useUser from "../../hooks/useUser";
import {NavLink} from "react-router-dom";
import {removeJwt, removeUserData} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";

const menuItems = [
    {
        title: "Add Recipe",
        pageUrl: "/recipe/form"
    },
    {
        title: "Recipes",
        pageUrl: "/recipes"
    },
    {
        title: "Users",
        pageUrl: "/users"
    },
    {
        title: "About",
        pageUrl: "/about"
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //textAlign: 'center',
        height: '10vh',
        fontFamily: 'Nunito',

    },
    appBar: {
        background: 'none',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appBarTitle: {
        flexGrow: '1',
        fontSize: '2.5rem',
        color: 'white',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorTitle: {
        color: '#5AFF3D',
    },
    headerButtons: {
        color: "red"
    },
    menuButton: {
        '&:hover': {
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
            color: '#795548',
        },
        '&:focus': {
            color: '#795548',
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
        },

    },
    btColor: {
        fontFamily: 'Nunito',
        color: "#5AFF3D",
        fontSize: '0.95rem',
        '&:hover': {
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
            color: '#795548',
        }
    },
    dropMenu: {
        color: "#795548",
    },
    dropMenuText: {
        color: "#795548",
    }
}))

const Header1 = () => {
    const user = useUser()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(removeJwt())
        dispatch(removeUserData())
    }

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuClick = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <NavLink exact to="/home" className={classes.appBarTitle}>
                        <h1 className={classes.appBarTitle}>Super
                            <span className={classes.colorTitle}>Recipes</span>
                        </h1>
                    </NavLink>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <SortIcon className={classes.icon}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(item => {
                                    const {title, pageUrl} = item;
                                    return (
                                        <MenuItem className={classes.dropMenu}>
                                            <NavLink
                                                className={classes.dropMenuText}
                                                to={pageUrl}
                                                onClick={() => handleMenuClick()}>
                                                {title}</NavLink>
                                        </MenuItem>
                                    )
                                })}
                                {
                                    !!user ? (//!! pavercia i boolean javascript
                                        <>
                                            <MenuItem className={classes.dropMenu}>
                                                <NavLink
                                                    className={classes.dropMenuText}
                                                    to="/home"
                                                    component={Button}
                                                    onClick={logout}>
                                                    Logout</NavLink>
                                            </MenuItem>
                                        </>
                                    ) : (
                                        <>
                                            <MenuItem className={classes.dropMenu}>
                                                <NavLink to="/login" className={classes.dropMenuText}>Login</NavLink>
                                            </MenuItem>
                                            <MenuItem className={classes.dropMenu}>
                                                <NavLink to="/signup" className={classes.dropMenuText}>Sign Up</NavLink>
                                            </MenuItem>
                                        </>
                                    )
                                }
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div className={classes.headerButtons}>
                                {menuItems.map(item => {
                                    const {title, pageUrl} = item;
                                    return (
                                        <>
                                            <Button
                                                className={classes.btColor}
                                                component={NavLink}
                                                to={pageUrl}>
                                                {title}
                                            </Button>
                                        </>
                                    )
                                })}
                                {
                                    !!user ? (//!! pavercia i boolean javascript
                                        <>
                                            <Button
                                                className={classes.btColor}
                                                to="/home"
                                                component={NavLink}
                                                onClick={logout}>
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button to="/login" className={classes.btColor}
                                                    component={NavLink}>Login</Button>
                                            <Button to="/signup" className={classes.btColor} component={NavLink}>Sign
                                                Up</Button>
                                        </>
                                    )
                                }
                            </div>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header1;

