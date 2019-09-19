import React, { Component } from 'react';

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          required
          placeholder='add a todo'
          name='name'
          value={name}
        />
      </form>
    )
  }
}

export default TodoForm;