import React, {useEffect, useMemo, useState} from 'react';
import SearchForm from "../UI/SearchInput/SearchForm";
import CustomSelect from "../UI/CustomSelect/CustomSelect";
import BookService from "../API/BookService";
import {Book} from "../models/Book";
import BookCard from "./BookCard/BookCard";


const BooksList = () => {

    const [books, setBooks] = useState<Book[]>([]);

    const getResponseBooks = useMemo(async() => {
        const response = await BookService.getAll();
        const array = [];
        for (let i = 0; i < response.data.results.length; i++) {
            const currentBook = response.data.results[i];
            let authors = [];
            if (currentBook.authors.length !== 0) {
                authors = currentBook.authors[0]["name"].split(",");
            }
            const newBook = {
                ...currentBook,
                img: currentBook.formats["image/jpeg"],
                authors: authors.length === 1 || authors.length === 0 ? authors[0] : authors[1] + " " +authors[0],
                isFavourite: false,
            };
            console.log(newBook.authors);
            array.push(newBook);

        }

        setBooks(array);

    }, []);

    const newBook = {
        id: 1,
        title: "Test Book Title",
        authors: "Volodymyr Haideichuk",
        languages: "en",
        download_count: 123,
        img: "https://www.gutenberg.org/cache/epub/21/pg21.cover.medium.jpg",
        isFavourite: false,
    };





    return (
        <div>
            {/*{books.map(book => (*/}
            {/*    <p>{book.authors}</p>*/}
            {/*))}*/}

            <BookCard book={newBook}/>
        </div>
    )
}

export default BooksList;