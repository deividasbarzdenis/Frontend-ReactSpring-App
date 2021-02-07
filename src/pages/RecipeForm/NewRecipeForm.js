import {Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography,} from "@material-ui/core";
import * as yup from "yup";
import {useHistory} from "react-router";
import {addRecipe} from "../../api/recipesApi";
import {Field, FieldArray, Form, Formik} from "formik"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PropsState from '../../components/PropsState'
import {Select} from "material-ui-formik-components/Select"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 2, 0),
    },
}));

const ingredient = yup.object({
    ingredientDescription: yup.string().required("Ingredient is required"),
    amount: yup.number().positive("Must be positive").required("Amount is required"),
    muDescription: yup.number().required("Measure of unit is required"),
})

const validationSchema = yup.object().shape({
    recipeDescription: yup.string().required("Recipe title is required"),
    prepTime: yup.number().integer().positive("Must be positive").required("Preparation time is required"),
    cookTime: yup.number().integer().positive("Must be positive").required('Cook time is required'),
    servings: yup.number().integer().positive("Must be positive").required("Servings is required"),
    source: yup.string(),
    url: yup.string(),
    directions: yup.string().min(4, "Must have one category"),
    categoryDto: yup.array().of(yup.string().min(4).required("Category is required")).min(1).max(2),
    difficulty: yup.number().required("Difficulty is required"),
    ingredientDTO: yup.array().of(ingredient).min(1, 'Must have at least one ingredient'),
    recipeNotes: yup.string(),
})

const NewRecipeForm = () => {
    const history = useHistory();
    const classes = useStyles();

    const submitForm = (formValues, formikHelpers) => {
        // debugger --> skirtas debug narsykles konsoleje.
        formikHelpers.setSubmitting(true);
        addRecipe(formValues)
            .then(() => {
                history.push("/home");
            })
            .finally(() => {
                formikHelpers.setSubmitting(false);
            })
    }

    return (
        <Formik
            initialValues={{
                recipeDescription: '',
                prepTime: 0,
                cookTime: 0,
                servings: 0,
                source: '',
                url: '',
                directions: '',
                categoryDto: [''],
                difficulty: 0,
                ingredientDTO: [{
                    ingredientDescription: '',
                    amount: '',
                    muDescription: 0,
                }],
                recipeNotes: '',
            }}
            onSubmit={submitForm}
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
                } = props
                return (
                    <>
                        <PropsState {...props}/>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    New Recipe
                                </Typography>
                            </div>
                            <Form className={classes.form}>
                                <Grid container
                                      spacing={2}
                                      alignItems="center"
                                      justify="center"
                                >
                                    <Grid item xs={12}>
                                        <TextField
                                            id='recipeDescription'
                                            label='Title'
                                            type="text"
                                            value={values.recipeDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.recipeDescription ? errors.recipeDescription : ""}
                                            error={touched.recipeDescription && Boolean(errors.recipeDescription)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='prepTime'
                                            label='Preparation time'
                                            type="number"
                                            value={values.prepTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.prepTime ? errors.prepTime : ""}
                                            error={touched.prepTime && Boolean(errors.prepTime)}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='cookTime'
                                            label='Cook time'
                                            type="number"
                                            value={values.cookTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.cookTime ? errors.cookTime : ""}
                                            error={touched.cookTime && Boolean(errors.cookTime)}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            id='servings'
                                            label='Servings'
                                            type="number"
                                            value={values.servings}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.servings ? errors.servings : ""}
                                            error={touched.servings && Boolean(errors.servings)}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <Field
                                            onBlur={handleBlur}
                                            fullWidth
                                            error={touched.difficulty && Boolean(errors.difficulty)}
                                            helperText={touched.difficulty ? errors.difficulty : ""}
                                            name="difficulty"
                                            label="Difficulty"
                                            options={[
                                                {value: 1, label: "Easy"},
                                                {value: 2, label: "Medium"},
                                                {value: 3, label: "Hard"},
                                            ]}
                                            component={Select}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='source'
                                            label='Source'
                                            type="text"
                                            value={values.source}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.source ? errors.source : ""}
                                            error={touched.source && Boolean(errors.source)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='url'
                                            label='url'
                                            type="text"
                                            value={values.url}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.url ? errors.url : ""}
                                            error={touched.url && Boolean(errors.url)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FieldArray
                                            name="categoryDto"
                                            render={arrayHelpers => (
                                                <div>
                                                    {values.categoryDto && values.categoryDto.length > 0 ? (
                                                        values.categoryDto.map((category, index) => (
                                                            <div key={index}>
                                                                <TextField
                                                                    id='categoryDto'
                                                                    label='Category'
                                                                    type="text"
                                                                    value={values.categoryDto[index]}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    helperText={touched.category ? errors.category : ""}
                                                                    error={touched.category && Boolean(errors.category)}
                                                                    fullWidth
                                                                    name={`categoryDto.${index}`}/>
                                                                <Button
                                                                    margin="normal"
                                                                    type="button"
                                                                    color="secondary"
                                                                    variant="outlined"
                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                >
                                                                    -
                                                                </Button>
                                                                <Button
                                                                    margin="normal"
                                                                    type="button"
                                                                    variant="outlined"
                                                                    onClick={() => arrayHelpers.insert(index, '')}
                                                                >
                                                                    +
                                                                </Button>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <Grid item xs={12}>
                                                            <Button
                                                                fullWidth
                                                                type="button"
                                                                variant="outlined"
                                                                onClick={() => arrayHelpers.push('')}>
                                                                Add
                                                            </Button>
                                                        </Grid>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='directions'
                                            label='directions'
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
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FieldArray
                                            name="ingredientDTO"
                                            render={arrayHelpers => (
                                                <div>
                                                    <Grid container spacing={2}>
                                                        {values.ingredientDTO.map((ingredient, index) => (
                                                            <div key={index}>
                                                                <Grid
                                                                    container
                                                                    spacing={2}
                                                                    alignItems="center"
                                                                    justify="center"
                                                                >
                                                                    <Grid item xs={12} sm={6}>
                                                                        <TextField
                                                                            id='ingredientDescription'
                                                                            label='Ingredient description'
                                                                            type='text'
                                                                            value={values.ingredientDescription}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.ingredientDescription ? errors.ingredientDescription : ""}
                                                                            error={touched.ingredientDescription && Boolean(errors.ingredientDescription)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`ingredientDTO[${index}].ingredientDescription`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={2} sm={2}>
                                                                        <TextField
                                                                            id='amount'
                                                                            label='Pcs'
                                                                            type='number'
                                                                            value={values.amount}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.amount ? errors.amount : ""}
                                                                            error={touched.amount && Boolean(errors.amount)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`ingredientDTO.${index}.amount`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={2} sm={2}>
                                                                        <Field
                                                                            fullWidth
                                                                            onBlur={handleBlur}
                                                                            autoFocus
                                                                            error={touched.muDescription && Boolean(errors.muDescription)}
                                                                            helperText={touched.muDescription ? errors.muDescription : ""}
                                                                            name={`ingredientDTO[${index}].muDescription`}
                                                                            label="M.O.U"
                                                                            options={[
                                                                                {value: 1, label: "l."},
                                                                                {value: 2, label: "ml."},
                                                                                {value: 3, label: "kg."},
                                                                                {value: 4, label: "g."},
                                                                                {value: 5, label: "spoon"},
                                                                                {value: 6, label: "tea spoon"},

                                                                            ]}
                                                                            component={Select}
                                                                            />
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1}>
                                                                        <Button
                                                                            fullWidth
                                                                            margin="normal"
                                                                            type="button"
                                                                            color="secondary"
                                                                            variant="outlined"
                                                                            onClick={() => arrayHelpers.remove(index)}>
                                                                            -
                                                                        </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        ))}
                                                        <Grid item xs={12}>
                                                            <Button
                                                                fullWidth
                                                                margin="normal"
                                                                type="button"
                                                                color="secondary"
                                                                variant="outlined"
                                                                onClick={() => arrayHelpers
                                                                    .push({
                                                                        ingredientDescription: '',
                                                                        amount: 0,
                                                                        muDescription: ''
                                                                    })}
                                                            >
                                                                Add
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id='recipeNotes'
                                            label='Notes'
                                            type='text'
                                            value={values.recipeNotes}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.recipeNotes ? errors.recipeNotes : ""}
                                            error={touched.recipeNotes && Boolean(errors.recipeNotes)}
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            disabled={isSubmitting}
                                            fullWidth
                                        >
                                            SUBMIT
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Container>
                    </>
                )
            }}
        </Formik>

    );
}

export default NewRecipeForm;

