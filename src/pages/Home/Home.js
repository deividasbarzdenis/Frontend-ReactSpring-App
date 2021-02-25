import {Collapse, makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useEffect, useState} from "react";
import {Link as Scroll} from 'react-scroll'
import PlaceForRecipes from "./landingPage/PlaceForRecipes";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontFamily: 'Nunito',
        width: '80%',
        margin: '0 auto',

    },
    colorTitle: {
        color: '#5AFF3D',
    },
    welcome: {
        color: '#fff',
        fontSize: '4rem',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    goDownCon: {
        '&:hover': {
            color: '#795548',
            backgroundColor: 'rgba(215, 138, 248,  0.75)',

        },
        '&:focus': {
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
        },
    },
}))
const Home = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <>
            <div className={classes.root} id='header'>
                <Collapse
                    in={checked} {...(checked ? {timeout: 1000} : {})}>
                    <div className={classes.container}>
                        <h1 className={classes.welcome}>Welcome to <br/> Super {''}
                            <span className={classes.colorTitle}>Recipes</span>
                        </h1>
                        <Scroll to="place-for-recipes" smooth={true}>
                            <IconButton className={classes.goDownCon}>
                                <ExpandMoreIcon className={classes.goDown}/>
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>

            </div>
            <PlaceForRecipes/>
        </>
    );
}

export default Home;
