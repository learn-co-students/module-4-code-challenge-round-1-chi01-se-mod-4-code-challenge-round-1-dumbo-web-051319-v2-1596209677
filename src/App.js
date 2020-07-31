import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form"



class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      booksOnShelf: []
    }

  }

async componentDidMount() {
  const url = "http://localhost:3005/books"
  const resp = await fetch(url);
  const bookData = await resp.json();
  this.setState( { books: bookData  } )
}

addToShelf = (id) => {
  const bookShelf = this.state.booksOnShelf
  const updatedBooksOnShelf = this.state.booksOnShelf.map(book =>{
    if (book.id === id ){
      this.setState({
        booksOnShelf: [...bookShelf, book]
      })
    }
  })
}


renderNewBook = (book) => {
    const arr = this.state.books
    this.setState({
      books: [...arr, book ]
    })
  }


  
  render() {

    const books = this.state.books
    const booksOnShelf = this.state.booksOnShelf
    return (
      <div className="book-container">
        <Form newBook={this.renderNewBook} />
        <BookList addBooks={this.addToShelf} books={books} />
        <Bookshelf books={booksOnShelf} />
      </div>
    );
  }
}

export default App;
