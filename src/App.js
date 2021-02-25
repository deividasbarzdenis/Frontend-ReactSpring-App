import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store'
import {CssBaseline, makeStyles} from "@material-ui/core";
import Header1 from "./components/Header/Header";
import cover from './assets/cover.jpg'
import Content from "./components/Content/Content";

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
                    <Content/>
                    {/*<Footer/>*/}
                </Router>
            </Provider>
        </div>
    );
}

export default App;
