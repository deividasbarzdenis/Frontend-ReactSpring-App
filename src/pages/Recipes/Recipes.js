import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {deleteRecipe, fetchRecipes} from "../../api/recipesApi";
import RecipesTable from "./RecipesTable";


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
        <Container component="main" maxWidth="xs">
            <h1 align="center"> All Recipes</h1>
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
        </Container>
    );
}

export default Recipes;

