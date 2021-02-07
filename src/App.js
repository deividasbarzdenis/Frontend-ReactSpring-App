import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {Provider} from "react-redux";
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
