import {Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useEffect, useState} from "react";
import {fetchRecipes} from "../../api/recipesApi";
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const Home = () => {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
        <Container component="main">
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {recipes.map((recipe) => (
                        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {recipe.recipeDescription}
                                    </Typography>
                                    <Typography>
                                        {recipe.directions}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to={`/recipe/${recipe.id}`} component={Button} size="small" color="primary">
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </NavLink>
                                    {/*<Button size="small" color="primary">*/}
                                    {/*    Edit*/}
                                    {/*</Button>*/}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}

export default Home;

