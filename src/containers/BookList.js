import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {

  	const allBooks = this.props.books.map(book => {
  	  return <Book key={book.id} handleBookClick={this.props.handleBookClick} book={book} />
  	})

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleFormSubmit={this.props.handleFormSubmit} />
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
