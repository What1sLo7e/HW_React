import react from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
    <header>
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link " to='/input-range'>InputRange</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/movies' >Movies</NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
    )
}

export default Header