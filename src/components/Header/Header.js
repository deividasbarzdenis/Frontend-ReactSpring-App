import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <NavLink className="brand-logo" exact to="/home">Home</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/recipe/form">Add Recipe</NavLink></li>
                        <li><NavLink to="/recipes">Recipes</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;



