import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
  	books: [],
  	bookShelf: [],
  	lastBookId: 0
  }

  componentDidMount() {

  	fetch('http://localhost:3005/books')
  	.then(resp => resp.json())
  	.then(books => {
  	  	this.setState({books})
  	  })
  }

  handleBookClick = (book) => {
  	if(!this.state.bookShelf.includes(book)) {
  	  this.setState({
  		  bookShelf: [...this.state.bookShelf, book]
  	  })
  	 }
  }

  //create a copy of state that can be filtered through to make sure
  //book id is new for bookshelf
  handleBookShelfClick = (bookObj) => {
  	const copyOfState = [...this.state.bookShelf]
  	const newState = copyOfState.filter(book => book.id !== bookObj.id)
  	this.setState({
  		bookShelf: newState
  	})
  }

  handleFormSubmit = (e, bookObj) => {
  	e.preventDefault()
	if(!this.state.books.includes(bookObj)) {
  	  this.setState({
  		books: [bookObj, ...this.state.books]
  	  })
  	}
  }
 
  render() {
    return (
    	<main>
	      <div className="book-container">
	        <BookList 
            handleFormSubmit={this.handleFormSubmit} 
            handleBookClick={this.handleBookClick} 
            books={this.state.books} 
          />
	        <Bookshelf 
            handleBookShelfClick={this.handleBookShelfClick} 
            books={this.state.bookShelf} 
          />
	      </div>
	    </main>
    );
  }
}

export default App;
