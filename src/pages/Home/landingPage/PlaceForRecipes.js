import {makeStyles} from "@material-ui/core";
import RecipeCard from "./RecipeCard";
import React, {useEffect, useState} from "react";
import {fetchRecipes} from "../../../api/recipesApi";
import useWindowPosition from "../../../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
        }
    },
}))
const PlaceForRecipes = () => {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const checked = useWindowPosition('header');

    useEffect(() => {
        loadAllRecipes();
    }, [])

    const loadAllRecipes = () => {
        setIsLoading(true);
        fetchRecipes()
            .then(response => {
                setRecipes(response.data)
            }).catch(e =>
            (console.log(e)))
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className={classes.root} id="place-for-recipes">
            {
                !isLoading &&
                (
                    <>
                        {
                            recipes.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} checked={checked}/>
                            ))
                        }
                    </>
                )
            }
        </div>
    );
}

export default PlaceForRecipes;

