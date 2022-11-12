import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { getAll, update } from "./utilities/BooksAPI";

const App = () => {
  const [books, setBookState] = useState([]);
  useEffect(() => {
    getAll().then((book) => {
      setBookState(book);
    });
  }, []);

  const updateBookShelf = (book, newShelf) => {
    if (book) {
      const bookForUpdate = books.find((b) => b.id === book.id);
      if (bookForUpdate) {
        bookForUpdate.shelf = newShelf;
        update(bookForUpdate, newShelf).then(() => {
          setBookState([
            ...books.filter((b) => b.id !== book.id),
            bookForUpdate,
          ]);
        });
      } else {
        update(book, newShelf).then(() => {
          book.shelf = newShelf;
          setBookState([...books, book]);
        });
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage books={books} updateBookShelf={updateBookShelf} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchPage books={books} updateBookShelf={updateBookShelf} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
