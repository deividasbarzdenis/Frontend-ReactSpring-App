import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store'
import {CssBaseline, makeStyles} from "@material-ui/core";
import Header1 from "./pages/Home/landingPage/Header";
import cover from './assets/cover.jpg'
import PlaceForRecipes from "./pages/Home/landingPage/PlaceForRecipes";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}))

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Provider store={store}>
                <Router>
                    <Header1/>
                    <PlaceForRecipes/>
                    {/*<Header/>*/}
                    {/*<Content/>*/}
                    {/*<Footer/>*/}
                </Router>
            </Provider>
        </div>
    );
}

export default App;
