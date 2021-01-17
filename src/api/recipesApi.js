import HTTP from './'

export const fetchRecipes = () => HTTP.get('/recipes');

export const addRecipe = (recipe) => HTTP.post('/recipes', recipe);

export const deleteRecipe = (id) => HTTP.delete(`/recipes/${id}`);