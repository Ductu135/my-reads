import React, { useState } from "react";
import Book from "./Book";

const BookList = ({ title, books, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            {books.map((book) => {
              return <Book updateBookShelf={updateBookShelf} book={book} />;
            })}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BookList;
