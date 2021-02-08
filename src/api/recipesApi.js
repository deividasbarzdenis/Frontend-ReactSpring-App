import HTTP from './'

export const fetchRecipes = () => HTTP.get('/recipes');

export const addRecipe = (recipe) => HTTP.post('/recipes', recipe);

//export const updateRecipe = (id) => HTTP.update(`/recipes/${id}`); //Todo add update functionality

export const getRecipe = (id) => HTTP.get(`/recipes/${id}`);

export const deleteRecipe = (id) => HTTP.delete(`/recipes/${id}`);