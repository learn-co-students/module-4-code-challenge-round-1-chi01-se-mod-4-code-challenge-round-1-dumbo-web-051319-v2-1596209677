import React from "react";

class Form extends React.Component {

  state= {
    title: '',
    author: '',
    img: ''
  }

  handleAddForm = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return ( 
      <div>
        <h1>Add a book</h1>
        <form onSubmit={(event) => this.props.handleFormSubmit(event, this.state)}>
          <input 
            onChange={this.handleAddForm} 
            type='text' 
            name='title' 
            placeholder='title' 
          />
          <input 
            onChange={this.handleAddForm} 
            type='text' 
            name='author' 
            placeholder='author' 
          />
          <input 
            onChange={this.handleAddForm} 
            type='text' 
            name='img' 
            placeholder='img' 
          />
          <input type='submit' />
        </form>
      </div>
    )
  }

}

export default Form;
