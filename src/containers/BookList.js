import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.props.books.map(book => {
          return <Book addBooks={this.props.addBooks} bookData={book} />
        })}</ul>
      </div>
    );
  }
}

export default BookList;
