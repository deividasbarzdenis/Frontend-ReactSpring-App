import * as yup from 'yup';
import {useFormik} from "formik";
import {Avatar, CssBaseline, Grid, Link, makeStyles, TextField, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {setJwt, setUserData} from "../../store/slices/userSlice";
import {useHistory, useLocation} from "react-router";
import {login} from "../../api/loginApi";

const useStyles = makeStyles((theme) => ({
    text: {
        "& .MuiInputBase-input MuiOutlinedInput-input": {
            borderBottom: "1px solid #fff",
        },
    },
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .min(2, 'Username should be of minimum 2 characters length')
        .required('Username is required'),
    password: yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


const Login = () => {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()

    const postLogin = (loginData, { setSubmitting }) => {
        setSubmitting(true)

    login(loginData)
        .then(({data, headers: { authorization }}) => {
            dispatch(setUserData(data))
            dispatch(setJwt(authorization))

            const { from } = location.state || {
                from: {
                    pathname: '/home'
                }
            }
            history.push(from)
        }).catch(e => (console.log(e)))
}

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: postLogin,
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                    <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                        <TextField
                           className={classes.text}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            className={classes.text}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={formik.isSubmitting}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        </Container>
    );
}

export default Login;

