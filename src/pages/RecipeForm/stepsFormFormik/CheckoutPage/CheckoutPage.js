import useStyles from './styles';
import {addRecipe} from "../../../../api/recipesApi";
import {useHistory} from "react-router";
import {CircularProgress, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import {Form, Formik} from 'formik';

import validationSchema from './FormModel/validationSchema';
import recipeFormModel from './FormModel/recipeFormModel';
import formInitialValues from './FormModel/formInitialValues';


import {useState} from "react";
import Button from "@material-ui/core/Button";

const steps = ['Main information', 'Ingredients', 'Notes', 'Pictures', 'Review your recipe'];
const {formId, formField} = recipeFormModel;

const stepContent = (step) => {
    switch (step) {
        case 0:
            return <MainInformation formField={formField}/>;
        case 1:
            return <Ingredients formField={formField}/>;
        case 2:
            return <Notes formField={formField}/>;
        case 3:
            return <Pictures formField={formField}/>;
        case 4:
            return <Review/>
        default:
            return <div>Not Found</div>
    }
}
const CheckoutPage = () => {
    const history = useHistory();
    const classes = useStyles();
    const [step, setStep] = useState(0);
    const validationSchemaForm = validationSchema[step];
    const isLastStep = step === steps.length - 1;

    const submitForm = (values, actions) => {
        addRecipe(values)
            .then(() => {
                history.push("/home");
            }).finally(() => {
            actions.setSubmitting(false);
        })
        setStep(step + 1);
    }

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            submitForm(values, actions);
        } else {
            setStep(step + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    const handleBack = () => {
        setStep(step - 1);
    }

    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                Recipe Form
            </Typography>
            <Stepper activeStep={step} className={classes.stepper}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchemaForm}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form id={formId}>
                            {stepContent(step)}
                            <div className={classes.buttons}>
                                {step !== 0 && (
                                    <Button onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                )}
                                <div className={classes.wrapper}>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        {isLastStep ? 'Submit' : 'Next'}
                                    </Button>
                                    {isSubmitting && (
                                        <CircularProgress
                                            size={24}
                                            className={classes.buttonProgress}
                                        />
                                    )}
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        </>
    );
}

export default CheckoutPage;

