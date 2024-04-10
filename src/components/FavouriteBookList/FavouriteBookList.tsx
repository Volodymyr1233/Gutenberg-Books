import React, {useContext, useState} from 'react';
import {Book} from "../../models/Book";
import BookCard from "../BookCard/BookCard";
import cl from "../BookList/BookList.module.css";
import {useBooks} from "../../hooks/useBooks";
import {BooksContext} from "../../context/booksContext";
import useChangeFavouriteStatus from "../../hooks/useChangeFavouriteStatus";


interface Props {
    searchValue: string,
}
const FavouriteBookList = ({searchValue}: Props) => {
    const {books, setBooks} = useContext(BooksContext);
    const changeStatus = useChangeFavouriteStatus();

    return (
        <div className={cl.allBooks}>
            {books.map(book => (
                book.title.toLowerCase().includes(searchValue) && book.isFavourite && <BookCard key={book.id} book={book} changeStatus={changeStatus}/>
            ))}
        </div>
    )
}

export default FavouriteBookList;