import React from "react";
import cl from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={cl.navbar_background}>
            <h1>Gutenberg Books</h1>
            <div className={cl.navbar_links}>
                <a href="#">All books</a>
                <a href="#">Favourite books</a>
            </div>
        </div>
    )
}

export default NavBar;
