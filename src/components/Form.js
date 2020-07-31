import React from "react";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      title:"",
      author: "",
      img: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendPostRequest(this.state)
    this.setState({
      id: "",
        title: "",
        author: "",
        img:""
    })
  }

  sendPostRequest = (obj) => {

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(obj)
    }
  
    fetch("http://localhost:3005/books", configObj)
    .then(resp => resp.json())
    .then(bookData => {
      this.props.renderNewBook(bookData)
    })
    .catch(error => console.log(error))
  } 

  render() {
    return <h1>
      <form className="new-book-form" onSubmit={this.handleSubmit}  > 
    <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
    <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
    <input placeholder="Type Img URl Here" name="img" value={this.state.img} onChange={this.handleChange}/>
    <input type="submit" value="submit"  />
  </form>
  </h1>;
  }
}

export default Form;
