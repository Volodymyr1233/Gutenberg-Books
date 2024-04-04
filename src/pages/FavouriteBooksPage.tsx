import React from "react";
import useSearch from "../hooks/useSearch";
import SearchForm from "../UI/SearchInput/SearchForm";
import FavouriteBookList from "../components/FavouriteBookList/FavouriteBookList";

const FavouriteBooksPage = () => {
    const [searchValue, searchBook] = useSearch();

    return (
        <div className="App">
            <SearchForm value={searchValue} onChange={(e) => {
                e.preventDefault();
                searchBook(e.target.value)
            }}/>
            <FavouriteBookList searchValue={searchValue}/>
        </div>
    )
}

export default FavouriteBooksPage;