import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../utilities/BooksAPI";
import Book from "../components/Book";

const SearchPage = ({ updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  useEffect(
    (query) => {
      setQuery(query);
    },
    [query]
  );

  const updateQuery = (e) => {
    search(e).then((result) => {
        setResults(result)
    });
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
          {(results.length > 0) ? (
            results.map((book) => <Book book={book} updateBookShelf={updateBookShelf} />)
          ) : (
            <div>There is no result</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
