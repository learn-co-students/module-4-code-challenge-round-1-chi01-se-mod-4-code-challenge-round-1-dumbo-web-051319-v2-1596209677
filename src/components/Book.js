import React from "react";

const Book = props => {

  return (
    <div 
      className="book-card" 
      onClick={
        props.handleBookClick ? 
        () => props.handleBookClick(props.book) 
        : 
        () => props.handleBookShelfClick(props.book)}
      >
      <h2>{props.book.title}</h2>
      <p>{props.book.author}</p>
      <img 
        alt={props.book.name} 
        src={props.book.img}   
      /> 
    </div>
  );
};

export default Book;

