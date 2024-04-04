import React from "react";
import SearchForm from "../UI/SearchInput/SearchForm";
import BooksList from "../components/BookList/BooksList";
import useSearch from "../hooks/useSearch";
import Loading from "../components/Loading/Loading";


interface AllBooksPageInterface {
    isLoading: boolean;
}
const AllBooksPage = ({isLoading}: AllBooksPageInterface) => {
    const [searchValue, searchBook] = useSearch();

    if (isLoading) {
        return <Loading/>;
    }
    return (
        <div className="App">
            <SearchForm value={searchValue} onChange={(e) => {
                e.preventDefault();
                searchBook(e.target.value)
            }}/>
            <BooksList searchValue={searchValue}/>
        </div>
    )
}

export default AllBooksPage;