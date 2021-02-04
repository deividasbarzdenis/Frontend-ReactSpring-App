import * as Yup from 'yup';
import recipeFormModel from "./recipeFormModel";


const {
    formField: {
        recipeDescription,
        prepTime,
        cookTime,
        servings,
        source,
        url,
        directions,
        categoryDto,
        difficulty,
        ingredientDescription,
        amount,
        muDescription,
        recipeNotes
    }
} = recipeFormModel;

export default [
    Yup.object().shape({
        [recipeDescription.name]: Yup.string().required(`${recipeDescription.requiredErrorMsg}`),
        [prepTime.name]: Yup.number().integer().positive().required(`${prepTime.requiredErrorMsg}`),
        [cookTime.name]: Yup.number().integer().positive().required(`${cookTime.requiredErrorMsg}`),
        [servings.name]: Yup.number().integer().positive().required(`${servings.requiredErrorMsg}`),
        [source.name]: Yup.string(),
        [url.name]: Yup.string(),
        [directions.name]: Yup.string().required(`${directions.requiredErrorMsg}`),
        [categoryDto.name]: Yup.string().required(`${categoryDto.requiredErrorMsg}`),
        [difficulty.name]: Yup.string().required(`${difficulty.requiredErrorMsg}`),
        [ingredientDescription.name]: Yup.string().required(`${ingredientDescription.requiredErrorMsg}`),
        [amount.name]: Yup.number().required(`${amount.requiredErrorMsg}`),
        [muDescription.name]: Yup.string().required(`${muDescription.requiredErrorMsg}`),
        [recipeNotes.name]: Yup.string(),
    })
]