import React from "react";
import cl from "./NavBar.module.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={cl.navbar_background}>
            <h1>Gutenberg Books</h1>
            <div className={cl.navbar_links}>
                <Link to="/books">All books</Link>
                <Link to="/favourite">Favourite books</Link>
            </div>
        </div>
    )
}

export default NavBar;
