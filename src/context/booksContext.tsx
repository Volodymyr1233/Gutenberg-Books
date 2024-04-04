import React, {createContext} from "react";
import {Book} from "../models/Book";

interface BooksContextType {
    books: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>> | (() => void),
}

export const BooksContext = createContext<BooksContextType>({books: [], setBooks: () => {}})