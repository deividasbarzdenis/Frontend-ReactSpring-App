import * as yup from 'yup';
import * as Yup from 'yup';
import {FieldArray, Form, Formik} from 'formik';
import {Grid, Input, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useState} from "react";

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

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(1)
    }
}));

const validationSchema = yup.object().shape({
    recipeDescription: Yup.string().required("Recipe title is required"),
    prepTime: Yup.number().integer().positive().required("Preparation time is required"),
    cookTime: Yup.number().integer().positive().required('Cook time is required'),
    servings: Yup.number().integer().positive().required("Servings is required"),
    source: Yup.string(),
    url: Yup.string(),
    directions: Yup.string().required("Directions is required"),
    categoryDto: Yup.string().required("Category is required"),
    difficulty: Yup.string().required("Difficulty is required"),
    ingredientDescription: Yup.string().required("Ingredient is required"),
    amount: Yup.number().required("Amount is required"),
    muDescription: Yup.string().required("Measure of unit is required"),
    recipeNotes: Yup.string(),
})

export const FormMainInfo = ({formData, setFormData, nextStep}) => {
    const classes = useStyles();
    const [difficulty, setDifficulty] = useState([]);

    const handleChangeSel = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <>
            <Formik
                initialValues={formData}
                onSubmit={values => {
                    setFormData(values);
                    nextStep();
                }}
                validationSchema={validationSchema}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        handleReset
                    } = props
                    return (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Main information
                            </Typography>
                            <Form className={classes.form}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='recipeDescription'
                                            label='Recipe description*'
                                            type='text'
                                            value={values.recipeDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.recipeDescription ? errors.recipeDescription : ""}
                                            error={touched.recipeDescription && Boolean(errors.recipeDescription)}
                                            variant="outlined"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='prepTime'
                                            label='Preparation time*'
                                            type='number'
                                            value={values.prepTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.prepTime ? errors.prepTime : ""}
                                            error={touched.prepTime && Boolean(errors.prepTime)}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='cookTime'
                                            label='Cook time*'
                                            type='number'
                                            value={values.cookTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.cookTime ? errors.cookTime : ""}
                                            error={touched.cookTime && Boolean(errors.cookTime)}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='servings'
                                            label='Servings*'
                                            type='number'
                                            value={values.servings}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.servings ? errors.servings : ""}
                                            error={touched.servings && Boolean(errors.servings)}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <InputLabel labelId="difficulty-label">Difficulty</InputLabel>
                                        <Select
                                        labelId="difficulty-label"
                                        id="difficulty"
                                        multiple
                                        value={difficulty}
                                        onChange={handleChangeSel}
                                        input={<Input/>}
                                        >
                                            {difficulties.map(difficulty => (
                                                <MenuItem key={difficulty} value={difficulty}>
                                                    {difficulty}
                                                </MenuItem>
                                            ))}
                                            
                                        </Select>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FieldArray
                                            name="categoryDto"
                                        >
                                            {(arrayHelpers) => (
                                                <div>
                                                    {values.categoryDto.map((category, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <TextField
                                                                    id='categoryDto'
                                                                    label='Category*'
                                                                    type='text'
                                                                    value={`categoryDto.${index}`}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    helperText={touched.categoryDto ? errors.categoryDto : ""}
                                                                    error={touched.categoryDto && Boolean(errors.categoryDto)}
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    required
                                                                    autoFocus
                                                                />
                                                                <Button
                                                                    margin="normal"
                                                                    type="button"
                                                                    color="secondary"
                                                                    variant="outlined"
                                                                    onClick={() => arrayHelpers.remove(index)}
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
                                                            arrayHelpers.push('')
                                                        }
                                                    >
                                                        Add
                                                    </Button>
                                                </div>
                                            )}
                                        </FieldArray>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='source'
                                            label='Source*'
                                            type='text'
                                            value={values.source}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.source ? errors.source : ""}
                                            error={touched.source && Boolean(errors.source)}
                                            variant="outlined"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='url'
                                            label='url*'
                                            type='text'
                                            value={values.url}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.url ? errors.url : ""}
                                            error={touched.url && Boolean(errors.url)}
                                            variant="outlined"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='directions'
                                            label='directions*'
                                            type='text'
                                            value={values.directions}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.directions ? errors.directions : ""}
                                            error={touched.directions && Boolean(errors.directions)}
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='primary'
                                        className={classes.button}
                                    >
                                        Continue
                                    </Button>
                                </Grid>
                            </Form>
                        </>
                    )
                }
                }}
            </Formik>
        </>
    )
}
