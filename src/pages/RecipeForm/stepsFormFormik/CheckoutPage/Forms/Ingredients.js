import {Grid, Typography} from "@material-ui/core";
import InputField from "../../FormFields/InputField";
import InputFieldNumber from "../../FormFields/InputFieldNumber";
import SelectField from "../../FormFields/SelectField";
import {FieldArray} from "formik";
import Button from "@material-ui/core/Button";

const muDescriptions = [
    {
        value: undefined,
        label: 'None',
    },
    {
        value: '1',
        label: 'l',
    },
    {
        value: '2',
        label: 'ml',
    },
    {
        value: '3',
        label: 'kg',
    },
    {
        value: '4',
        label: 'g',
    },
    {
        value: '5',
        label: 'spoon',
    },
    {
        value: '6',
        label: 'table spoon',
    },
]


export default function Ingredients({props, values}) {
    const {
        formField: {
            ingredientDescription,
            amount,
            muDescription,
        }
    } = props;
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Main information
            </Typography>
            <Grid container spacing={3}>
                <FieldArray name="ingredientDTO">
                    {({push, remove}) => (
                        <div>
                            {values.ingredientDTO.map((ingred, index) => {
                                const ingredientDescription = `ingredientDTO[${index}].ingredientDescription`;
                                const amount = `ingredientDTO[${index}].amount`;
                                const muDescription = `ingredientDTO[${index}].muDescription`;
                                return (
                                    <div key={ingred.id}>
                                        <Grid item xs={6} sm={3}>
                                            <InputField name={ingred.ingredientDescription.name}
                                                        label={ingred.ingredientDescription.label}
                                                        fullWidth/>
                                        </Grid>
                                        <Grid item xs={4} sm={2}>
                                            <InputFieldNumber name={ingred.amount.name} label={ingred.amount.label}
                                                              fullWidth/>
                                        </Grid>
                                        <Grid item xs={4} sm={2}>
                                            <SelectField name={ingred.muDescription.name}
                                                         label={ingred.muDescription.label}
                                                         data={muDescriptions}
                                                         fullWidth/>
                                        </Grid>
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
                                push({ id})
                            }
                            >Add</Button>
                        </div>
                    )}

                </FieldArray>
            </Grid>
        </>
    )
}