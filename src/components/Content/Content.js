import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Recipes from "../../pages/Recipes/Recipes";
import Recipe from "../../pages/Recipe/Recipe";
import {User} from "../../pages/User/User";
import About from "../../pages/About/About";
import UserProfile from "../../pages/User/UserProfile";
import NewRecipeForm from "../../pages/RecipeForm/NewRecipeForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Container from "@material-ui/core/Container";

const Content = () => {
    return (
        <Container component="main" >
            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>

                <PrivateRoute path="/recipe/form" roles={['ADMIN', 'USER']}>
                    <NewRecipeForm/>
                </PrivateRoute>

                <PrivateRoute path="/recipes" roles={['ADMIN']}>
                    <Recipes/>
                </PrivateRoute>

                <Route exact path="/recipe/:id">
                    <Recipe/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>

                <PrivateRoute exact path="/users" roles={['ADMIN']}>
                    <User/>
                </PrivateRoute>

                <PrivateRoute path="/users/:id" roles={['ADMIN', 'USER']}>
                    <UserProfile/>
                </PrivateRoute>

                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Container>
    );
}

export default Content;

