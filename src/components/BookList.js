import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookList = ({ title, books, updateBookShelf, shelfLines }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            {books.map((book) => {
              return (
                <Book
                  books={books}
                  updateBookShelf={updateBookShelf}
                  book={book}
                  shelfLines={shelfLines}
                />
              );
            })}
          </li>
        </ol>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
  updateBookShelf: PropTypes.func.isRequired,
  shelfLines: PropTypes.array,
};

export default BookList;
