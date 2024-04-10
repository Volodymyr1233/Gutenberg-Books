import React, {useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AllBooksPage from "./pages/AllBooksPage";
import {Book} from "./models/Book";
import {useBooks} from "./hooks/useBooks";
import FavouriteBooksPage from "./pages/FavouriteBooksPage";
import {BooksContext} from "./context/booksContext";

function App() {

    const [books, setBooks] = useState<Book[]>([]);

    const isLoading = useBooks({books, setBooks});
  return (
      <BooksContext.Provider value={{
          books,
          setBooks
      }}>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path="/books" element={<AllBooksPage isLoading={isLoading}/>}/>
                  <Route path="/favourite" element={<FavouriteBooksPage/>}/>
                  <Route path="*" element={<Navigate to="/books" replace/>}></Route>
              </Routes>

          </BrowserRouter>
      </BooksContext.Provider>
  );
}

export default App;
