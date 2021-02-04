import {Grid, Typography} from "@material-ui/core";
import InputField from "../../FormFields/InputField";
import InputFieldNumber from "../../FormFields/InputFieldNumber";
import SelectField from "../../FormFields/SelectField";
import TextAreaField from "../../FormFields/TextAreaField";
import {FieldArray} from "formik";
import Button from "@material-ui/core/Button";


const difficulties = [
    {
        value: undefined,
        label: 'None',
    },
    {
        value: '1',
        label: 'EASY',
    },
    {
        value: '2',
        label: 'MODERATE',
    },
    {
        value: '3',
        label: 'KIND_OF_HARD',
    },
    {
        value: '4',
        label: 'HARD',
    },
];

export default function MainInformation({props, values}) {
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
        }
    } = props;
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Main information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipeDescription.name} label={recipeDescription.label} fullWidth/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <InputFieldNumber name={prepTime.name} label={prepTime.label} fullWidth/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <InputFieldNumber name={cookTime.name} label={cookTime.label} fullWidth/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <InputFieldNumber name={servings.name} label={servings.label} fullWidth/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SelectField name={difficulty.name} label={difficulty.label} data={difficulties} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <InputField name={source.name} label={source.label} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <InputField name={url.name} label={url.label} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <InputField name={url.name} label={url.label} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextAreaField name={directions.name} label={directions.label} fullWidth/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FieldArray name="categoryDto">
                        {({push, remove}) => (
                            <div>
                                {values.categoryDto.map((cat, index) => {
                                    const category = `categoryDto[${index}]`
                                    return (
                                        <div key={cat.id}>
                                            <InputField name={categoryDto.name} label={categoryDto.label} fullWidth/>
                                            <Button
                                                margin="normal"
                                                type="button"
                                                color="secondary"
                                                variant="outlined"
                                                onClick={() => remove(index)}
                                            >
                                                x
                                            </Button>
                                        </div>
                                    );
                                })}
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() =>
                                        push([category])
                                    }
                                >
                                    Add
                                </Button>
                            </div>
                        )}
                    </FieldArray>
                </Grid>
            </Grid>
        </>
    )
}