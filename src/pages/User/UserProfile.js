import Container from "@material-ui/core/Container";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUserById} from "../../api/usersApi";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    profilePicture: {
        justifyContent: 'flex-start',
        margin: theme.spacing(3, 0, 2),
    },
    textContainer: {
        justifyContent: 'flex-end',
        margin: theme.spacing(3, 0, 2),
    },
    textFields: {
        margin: theme.spacing(1),
        justifyContent: 'center',
    },
}));

const UserProfile = ({users}) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = () => {
        setIsLoading(true);
        getUserById(id)
            .then(response => {
                setUser(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <Container component="main" className={classes.root}>
            <Grid container xs={12}>
                <Grid item xs={12} sm={6} className={classes.profilePicture}>
                    <h1>Picture place</h1>
                    <div>
                        <img
                            width={200}
                            height={300}
                            alt=""
                            src="src/img/user-profile-black.svg"
                        />
                        {/*<UserPictureForm/>*/}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.textContainer}>
                    <h4>User Profile</h4>
                    <Grid item xs={12} className={classes.textFields}>
                        <label>User Name</label>
                        <Typography component="h5">{user.username}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textFields}>
                        <label>Last Name</label>
                        <Typography component="h5">{user.lastName}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textFields}>
                        <label>Name</label>
                        <Typography component="h5">{user.name}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textFields}>
                        <label>Email</label>
                        <Typography component="h5">{user.email}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textFields}>
                        <label>Phone Number</label>
                        <Typography component="h5">{user.phone}</Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}

export default UserProfile;



