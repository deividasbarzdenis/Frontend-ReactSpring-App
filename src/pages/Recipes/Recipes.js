import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {deleteRecipe, fetchRecipes} from "../../api/recipesApi";
import RecipesTable from "./RecipesTable";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

    const handleDeleteClick = (id) => {
        setIsLoading(true);
        deleteRecipe(id)
            .then(() => {
                loadAllRecipes();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <Container component="main">
            <Container container justify="center">
                <Grid item xs={12} align="center" >
                    <Typography component="h1" variant="h5" >All Recipes</Typography>
                </Grid>
                <Grid item xs={12}>
                {
                    isLoading ?
                        (
                            <div className="spinner-border" role="status">
                            </div>
                        ) :
                        <RecipesTable
                            recipes={recipes}
                            handleDeleteClick={handleDeleteClick}
                        />

                }
                </Grid>
            </Container>
        </Container>
    );
}

export default Recipes;

