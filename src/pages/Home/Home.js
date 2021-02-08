import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    CssBaseline,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useEffect, useState} from "react";
import {fetchRecipes} from "../../api/recipesApi";
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cover from '../../assets/cover.jpg'
import pizzas from '../../assets/pizzas.png'
import grey from '@material-ui/core/colors/red';
import a1 from "../../assets/img/1.jpg";
import a2 from "../../assets/img/2.jpg";
import a3 from "../../assets/img/3.jpg";
import a4 from "../../assets/img/4.jpg";
import a5 from "../../assets/img/5.jpg";
import a6 from "../../assets/img/6.jpg";
import a7 from "../../assets/img/7.jpg";
import a8 from "../../assets/img/8.jpg";
import a9 from "../../assets/img/9.jpg";
import a10 from "../../assets/img/10.jpg";
import a11 from "../../assets/img/11.jpg";


const primary = grey[700];

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        overflow: 'hidden',
        marginLeft: '-73px',
        minWidth: '112%',
        backgroundImage: `url(${process.env.PUBLIC_URL + cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    mario: {
        height: '50px',
        weight: '50px',
        position: 'absolute',
        top: '-50px',
        left: 0,
        animation: 'drive 3s both infinite linear',
    },
    '@keyframes drive': {
        'from': {transform: "translateX(-200px)"},
        'to': {transform: "translateX(1600px)"}
    },
}));


const Home = () => {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [expanded, setExpanded] = useState(-1);

    const handleExpandClick = (i) => {
        setExpanded(expanded === i ? -1 : i);
    };

    useEffect(() => {
        loadAllRecipes();
    }, [])

    const loadAllRecipes = () => {
        setIsLoading(true);
        fetchRecipes()
            .then(response => {
                setRecipes(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <Container component="main" className={classes.root}>
            <CssBaseline/>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {recipes.map((recipe, i) => (
                        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={pictures(recipe.id)}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <NavLink to={`/recipe/${recipe.id}`} component={Button} size="small"
                                             color={primary} align="center">
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {recipe.recipeDescription}
                                        </Typography>
                                    </NavLink>
                                </CardContent>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={() => handleExpandClick(i)}
                                    aria-expanded={expanded === i}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                                <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                                    <CardActions>
                                        <CardContent>
                                            <Typography>
                                                {recipe.directions}
                                            </Typography>
                                        </CardContent>
                                    </CardActions>
                                </Collapse>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <div className={classes.mario}>
                <Card image={process.env.PUBLIC_URL + pizzas} className={classes.mario} alt="Pizza"/>
            </div>
        </Container>
    );
}

export default Home;

const pictures = (inx) => {
    switch (inx) {
        case 1:
            return a1;
        case 2:
            return a2;
        case 3:
            return a3;
        case 4:
            return a4;
        case 5:
            return a5;
        case 6:
            return a6;
        case 7:
            return a7;
        case 8:
            return a8;
        case 9:
            return a9;
        case 10:
            return a10;
        case 11:
            return a11;

        default:
            return a1;
    }
}