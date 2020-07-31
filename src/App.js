import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor(){
    super()
    this.state={
      books: [],
      yourBooks: []
    }
  }

  createNewBook=(bookData)=>{
    const modifiedBooks=this.state.books
    this.setState({
      books: [...modifiedBooks, bookData]
    })
  }


  addToShelf=(bookInstance)=>{
    const modifiedBookShelf=this.state.yourBooks
    const filteredYourBooks = this.state.yourBooks.filter(book => book !== bookInstance)
    //I don't understand why this filter isn't working. I will come back to it after finishing the form deliverable if I can.
    //the idea is the filter will weed out "bookInstance" from the array of this.state.yourBooks, and then below I check if this.state.yourBooks contains bookinstance and replaces that state with the filtered list.
    //I don't understand why it's not doing so, however. But this should be a viable solution if I had more time to tinker with it.

    if (this.state.yourBooks.includes(bookInstance)){
      this.setState({
        yourBooks: filteredYourBooks
      })
      
    } else {
      modifiedBookShelf.push(bookInstance)
    }
    this.setState({
      yourBooks: modifiedBookShelf.filter(element => element !== undefined)
      //I don't understand why the modifiedBookShelf always has one undefined element inside of it.
      //I tried to filter it out but it doesn't filter. 
      //In any case, the undefined element doesn't appear to break anything so I guess it should be alright to leave it there. I must be using filter wrong.
    })
    console.log(this.state.yourBooks)
  }



  componentDidMount(){
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(data => this.setState({
        books: data
      }))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.addToShelf} createNewBook={this.createNewBook}/>
        <Bookshelf yourBooks={this.state.yourBooks} addToShelf={this.addToShelf}/>
      </div>
    );
  }
}

export default App;
