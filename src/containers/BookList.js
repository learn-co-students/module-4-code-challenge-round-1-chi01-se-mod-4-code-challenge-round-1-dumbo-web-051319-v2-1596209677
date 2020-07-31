import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  renderBooks=()=>{
    return this.props.books.map(bookObj => <Book book={bookObj} addToShelf={this.props.addToShelf} />)
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createNewBook={this.props.createNewBook}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
