import React from "react";

const Book = ({ book, updateBookShelf }) => {
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
                    console.log(e.target.value);
                  }}
                >
                  <option disabled>Move to...</option>
                  <option style={{display: 'none'}}></option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
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

export default Book;
