import React, {useMemo, useState} from "react";
import BookService from "../API/BookService";
import {Book} from "../models/Book";

interface Props {
    books: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>,
}
export const useBooks = ({books, setBooks}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useMemo(async () => {
        setIsLoading(true);
        const array = [];
        for (let a = 1; a < 5; a++) {
            const response = await BookService.getAll(a);
            for (let i = 0; i < response.data.results.length; i++) {
                if (array.length === 100) break;
                const currentBook = response.data.results[i];
                let authors = [];
                if (currentBook.authors.length !== 0) {
                    authors = currentBook.authors[0]["name"].split(",");
                } else {
                    authors = ["Unknown"];
                }
                const newBook = {
                    ...currentBook,
                    img: currentBook.formats["image/jpeg"],
                    authors: authors.length === 1 || authors.length === 0 ? authors[0] : authors[1] + " " + authors[0],
                    isFavourite: false,
                };
                array.push(newBook);
            }



        }

        setIsLoading(false);
        setBooks(array);

    }, [])

    return isLoading;
}
