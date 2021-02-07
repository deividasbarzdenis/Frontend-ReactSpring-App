import {makeStyles, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useEffect, useState} from "react";
import {getRecipe} from "../../api/recipesApi";
import {useParams} from "react-router";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Recipe = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        loadRecipe();
    },[])
    const loadRecipe = () => {
        setLoading(true)
        getRecipe(id)
            .then(response => {
                setRecipe(response.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
    <Container component="main">
        <Container fixed>

            <Grid container justify="center" spacing={2}>
                    {!isLoading && (
                        <>
                            <Grid item xs={12}>
                                <Typography component="h3" variant="h5" ali>
                                    {recipe.recipeDescription}
                                </Typography>
                            </Grid>

                            {/*Todo --> FOTO VIETA */}

                            <Grid item xs={6} sm={3}>
                                <Typography component="p">Preparation time: {recipe.prepTime} .min</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography component="p">Cook time: {recipe.cookTime} .min</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography component="p">Servings for: {recipe.servings} people</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography component="p">Difficulty: {recipe.difficulty} </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography component="p">Categories: </Typography>
                                {recipe.categoryDto.map((category, index)=>(
                                    <Typography component="p" key={index}>{category}</Typography>
                                    ))}
                            </Grid>

                            <Grid item xs={12}>
                                <Typography component="h4">Ingredients:</Typography>
                            </Grid>
                            {recipe.ingredientDTO.map((ingredient) => (
                                <>
                                    <Grid item xs={12}>
                                        <Typography component="p">
                                            {ingredient.ingredientDescription}:
                                            {ingredient.amount}
                                            {ingredient.muDescription}
                                        </Typography>
                                    </Grid>
                                </>
                            ))}
                            <Grid item xs={12}>
                                <Typography component="h4">Directions: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="p">{recipe.directions}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h4">Notes: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="p">{recipe.recipeNotes}</Typography>
                            </Grid>
                        </>
                    )}
            </Grid>
        </Container>
    </Container>
)
    ;
}

export default Recipe;

