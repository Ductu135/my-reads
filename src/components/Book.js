import React, { useState } from "react";
import PropTypes from "prop-types";

const Book = ({ books, book, updateBookShelf, shelfLines }) => {
  const checkTheBookIsSelected = (shelf) => {
    const selectedBook = books.find((b) => b.id === book.id);
    if (selectedBook && shelf.id === selectedBook.shelf) {
      return `✔ ${shelf.name}`;
    } else {
      return shelf.name;
    }
  };

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover">
            <div>
              <img
                className="book-image"
                src={
                  book.imageLinks
                    ? `${book.imageLinks.smallThumbnail}`
                    : "Image not found"
                }
                style={{ width: 125, height: 195 }}
              />
              <div className="book-shelf-changer">
                <select
                  value={book.shelf ? book.shelf : ""}
                  onChange={(e) => {
                    updateBookShelf(book, e.target.value);
                  }}
                >
                  <option disabled>Move to...</option>
                  <option style={{ display: "none" }}></option>
                  {shelfLines.map((shelf) => {
                    return (
                      <option value={shelf.id}>
                        {checkTheBookIsSelected(shelf)}
                      </option>
                    );
                  })}
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="book-title">
          {book.title ? book.title : "There is no book name"}
        </div>
        <div className="book-authors">
          {book.authors ? (
            book.authors.length > 1 ? (
              book.authors.map((author) => {
                return <div>{author}</div>;
              })
            ) : (
              book.authors
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.array,
  updateBookShelf: PropTypes.func.isRequired,
  shelfLines: PropTypes.array,
};

export default Book;
