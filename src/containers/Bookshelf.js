import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const bookShelfBooks = props.books.map(book => {
  	return <Book key={book.id} handleBookShelfClick={props.handleBookShelfClick} book={book} />
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookShelfBooks}</ul>
    </div>
  );
};

export default Bookshelf;

