import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { getAll, update } from "./utilities/BooksAPI";


const App = () => {
  const [books, setBookState] = useState([]);
  useEffect(() => {
    getAllBook();
  }, [books]);

  const getAllBook = () => {
    getAll().then((book) => {
      setBookState(book);
    });
  }

  const updateBookShelf = (book, newShelf) => {
    if (book) {
      const bookForUpdate = books.filter((b) => b.id === book.id);
      if(bookForUpdate.length > 0) {
        update(bookForUpdate[0], newShelf).then((b) => {
          setBookState(...books);
        });
      }
      else {
        update(book, newShelf).then((b) => {
          setBookState(...books);
          console.log(books);
        });
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage books={books} updateBookShelf={updateBookShelf} />} />
        <Route exact path="/search" element={<SearchPage updateBookShelf={updateBookShelf} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
