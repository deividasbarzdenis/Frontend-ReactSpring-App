import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Recipes from "../../pages/Recipes/Recipes";
import RecipeFom from "../../pages/RecipeForm/RecipeForm";
import Recipe from "../../pages/Recipe/Recipe";
import {User} from "../../pages/User/User";
import About from "../../pages/About/About";

const Content = () => {

    return (
        <main>
            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route path="/recipe/form">
                    <RecipeFom/>
                </Route>
                <Route exact path="/recipes">
                    <Recipes/>
                </Route>
                <Route path="/recipe">
                    <Recipe/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/users">
                    <User/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </main>
    );
}

export default Content;

