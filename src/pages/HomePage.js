import React from "react";
import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";
import { shelfLines } from "../utilities/CommonData";
import PropTypes from "prop-types";

const HomePage = ({ books, updateBookShelf }) => {
  const navigate = useNavigate();

  const navigateToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {books.length > 0 ? (
              shelfLines.map((shelf) => {
                const bookListWithKey = books.filter(
                  (book) => book.shelf === shelf.id
                );
                return (
                  <BookList
                    updateBookShelf={updateBookShelf}
                    title={shelf.name}
                    books={bookListWithKey}
                    shelfLines={shelfLines}
                  />
                );
              })
            ) : (
              <div>There is no data</div>
            )}
          </div>
        </div>
        <div className="open-search">
          <button
            onClick={navigateToSearchPage}
            className="open-search"
          ></button>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  books: PropTypes.array,
  updateBookShelf: PropTypes.func.isRequired,
};

export default HomePage;
