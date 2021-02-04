import {useState} from "react";
import {FormMainInfo} from "./FormMainInfo";
import AdditionalInfo from "./AdditionalInfo";
import PictureInfo from "./PictureInfo";
import Confirm from "./Confirm";
import Success from "./Success";

export default function RecipeForm(){
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        recipeDescription: '',
        prepTime: 0,
        cookTime: 0,
        servings: 0,
        source: '',
        url: '',
        directions: '',
        categoryDto: [''],
        difficulty: '',
        ingredientDTO:[{
            ingredientDescription: '',
            amount: 0,
            muDescription: '',
        }],
        recipeNotes: '',
    });
    const nextStep = () => setStep(prev => prev +1);
    const prevStep = () => setStep(prev => prev - 1);
    switch (step) {
        case 1 :
            return(
                <FormMainInfo
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                />
            );
            case 2 :
                return(
                    <AdditionalInfo
                        formData={formData}
                        setFormData={setFormData}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
        case 3:
            return(
                <PictureInfo
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        case 4:
            return(
                <Confirm
                    formData={formData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        default:
            return <Success />
    }
}