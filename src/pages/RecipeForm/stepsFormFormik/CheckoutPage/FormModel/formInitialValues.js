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

export default {
    [recipeDescription.name]: '',
    [prepTime.name]: 0,
    [cookTime.name]: 0,
    [servings.name]: 0,
    [source.name]: '',
    [url.name]: '',
    [directions.name]: '',
    [categoryDto.name]: [''],
    [difficulty.name]: '',
    ingredientDTO: [{
        [ingredientDescription.name]: '',
        [amount.name]: 0,
        [muDescription.name]: '',
    }],
    [recipeNotes.name]: '',
}
