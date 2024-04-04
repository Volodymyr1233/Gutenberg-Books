import React, {useContext} from "react";
import {BooksContext} from "../context/booksContext";

const useChangeFavouriteStatus = () => {
    const {books, setBooks} = useContext(BooksContext);
    const changeFavouriteStatus = (id: number) => {
        setBooks(books.map(book =>
            book.id === id ? {...book, isFavourite: !book.isFavourite}: book
        ))
    }

    return changeFavouriteStatus;
}

export default useChangeFavouriteStatus;