import React from "react";
import { NavLink, Link } from 'react-router-dom' 

const Navigation = () => {  
    return (
        <header>
            <nav>
                <NavLink className="nav-link" to="/">Главная</NavLink>
                <NavLink className="nav-link" to="/authors">Авторы</NavLink>
                <NavLink className="nav-link" to="/books">Книги</NavLink>
            </nav>
        </header>
    )
 }
 
 export default Navigation;