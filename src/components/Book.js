import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.addBooks(props.bookData.id) }> 
      <h2>{props.bookData.title}</h2>
      <img src={props.bookData.img} ></img>
    </div>
  );
};

export default Book;
