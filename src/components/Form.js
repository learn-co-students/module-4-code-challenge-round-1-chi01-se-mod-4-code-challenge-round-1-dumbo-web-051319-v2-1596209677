import React from "react";

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      author: '',
      img: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.createNewBook(this.state)
    e.target.reset()
  }



  render() {
    return  <form onSubmit={this.handleFormSubmit}>
    <input placeholder="Title" name="title" onChange={this.handleChange}/>
    <input placeholder="Author" name="author" onChange={this.handleChange}/>
    <input placeholder="Image url goes here" name="img" onChange={this.handleChange}/>
    <input type="submit" value="Upload New Book" />
  </form>;
  }
}

export default Form;
