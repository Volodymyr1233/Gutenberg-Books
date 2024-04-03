import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import BooksList from "./pages/BooksList";
import SearchForm from "./UI/SearchInput/SearchForm";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SearchForm/>
        <BooksList/>
    </div>
  );
}

export default App;
