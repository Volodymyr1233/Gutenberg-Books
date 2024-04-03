import React from "react";
import cl from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";


const SearchForm = (props: React.ComponentPropsWithoutRef<"input">) => {
    return (
        <form className={cl.searchForm}>
            <span className={cl.searchIcon}><FaSearch/></span>
            <input {...props} className={cl.searchInput}/>
        </form>

    )
}

export default SearchForm;