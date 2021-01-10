import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
