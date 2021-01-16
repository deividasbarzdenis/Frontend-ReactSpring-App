import * as yup from 'yup';
import {withFormik} from "formik";
import validationsForm from './ValidationSchema';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = (props) => {
    const classes = useStyles();
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id='name'
                                    label='First Name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.name ? errors.name : ""}
                                    error={touched.name && Boolean(errors.name)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id='lastName'
                                    label='Last Name'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.lastName ? errors.lastName : ""}
                                    error={touched.lastName && Boolean(errors.lastName)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='email'
                                    label='Email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email ? errors.email : ""}
                                    error={touched.email && Boolean(errors.email)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='password'
                                    label='Password'
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.password ? errors.password : ""}
                                    error={touched.password && Boolean(errors.password)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='confirmPassword'
                                    label='Confirm Password'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    margin="dense"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Box>
                        <Button type="submit" color="primary" className={classes.submit} variant="contained"
                                disabled={isSubmitting}>SUBMIT</Button></Box>
                        <Box>
                        <Button color="primary" variant="contained" onClick={handleReset}>CLEAR</Button></Box>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>
    )
}
const Form = withFormik({
    mapPropsToValues: ({
                           name,
                           lastName,
                           email,
                           password,
                           confirmPassword
                       }) => {
        return {
            name: name || "",
            lastName: lastName || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || "",
        };
    },
    ValidationSchema: yup.object().shape(validationsForm),
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            //Todo send to backend here
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(SignUp);

export default Form;

