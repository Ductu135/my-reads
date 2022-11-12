import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../utilities/BooksAPI";
import Book from "../components/Book";
import { shelfLines } from "../utilities/CommonData";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

const SearchPage = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  useEffect(
    (query) => {
      if (query === "") {
        setQuery([]);
      } else {
        setQuery(query);
      }
    },
    [query]
  );

  const updateQuery = (e) => {
    const debouncedUpdate = debounce(() => {
      search(e).then((result) => {
        setResults(result);
      });
    }, 200);
    console.log(results);
    debouncedUpdate();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button onClick={navigateToHomePage} className="close-search"></button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div className="books-grid" style={{ justifyContent: "left" }}>
          {results ? (
            results.length > 0 ? (
              results.map((book) => (
                <Book
                  books={books}
                  book={book}
                  updateBookShelf={updateBookShelf}
                  shelfLines={shelfLines}
                />
              ))
            ) : (
              <div>There is no result</div>
            )
          ) : (
            <div>There is no result</div>
          )}
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchPage;
