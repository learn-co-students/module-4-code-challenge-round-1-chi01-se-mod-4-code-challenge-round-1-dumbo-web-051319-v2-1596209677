import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.yourBooks.map(bookObj => <Book book={bookObj} addToShelf={props.addToShelf}/>)}</ul>
    </div>
  );
};

export default Bookshelf;


