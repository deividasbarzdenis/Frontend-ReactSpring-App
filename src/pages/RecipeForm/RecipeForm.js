import {useForm, useStep} from "react-hooks-helper";
import {RecipeName} from "./stepForm/RecipeName";
import {Category} from "./stepForm/Category";
import {Ingredients} from "./stepForm/Ingredients";
import {Notes} from "./stepForm/Notes";
import {Submit} from "./stepForm/Submit";
import {Review} from "./stepForm/Review";

const defaultData = {
    //--->MAIN INFORMATION<---//
    recipeTitle: '',
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    source: '',
    URL: '',
    directions: '',
    //-------------
    description: '',
    difficulty: '',
    //--------------
    //--->INGREDIENTS<---//
    ingredientDescription: '',
    amount: 0,
    uom: '',
    //------------------
    //--->Notes<---//
    recipeNotes: '',
    //--->PICTURE<---//

    //--->SUBMIT<---//
}
const steps = [
    {id: 'title'},
    {id: 'category'},
    {id: 'ingredients'},
    {id: 'notes'},
    {id: 'review'},
    {id: 'submit'},

]
const RecipeForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })
    const props = {formData, setForm, navigation};

    switch (step.id) {
        case "title":
            return <RecipeName {...props}/>;
        case "category":
            return <Category {...props}/>;
        case "ingredients":
            return <Ingredients {...props}/>;
        case "notes":
            return <Notes {...props}/>;
        case "review":
            return <Review {...props}/>;
        case "submit":
            return <Submit {...props}/>;
    }

    return (
        <div>
            <h1>Multi Step Recipe Form</h1>
        </div>
    )
}
export default RecipeForm;





