import React, {useContext} from 'react';
import BookCard from "../BookCard/BookCard";
import cl from "./BookList.module.css";
import {BooksContext} from "../../context/booksContext";
import useChangeFavouriteStatus from "../../hooks/useChangeFavouriteStatus";


interface Props {
    searchValue: string,

}
const BooksList = ({searchValue,}: Props) => {
    const {books, setBooks} = useContext(BooksContext);

    const changeStatus = useChangeFavouriteStatus();

    return (
        <div className={cl.allBooks}>
            {books.map(book => (
                book.title.toLowerCase().includes(searchValue) && <BookCard key={book.id} book={book} changeStatus={changeStatus}/>
            ))}
        </div>
    )
}

export default BooksList;