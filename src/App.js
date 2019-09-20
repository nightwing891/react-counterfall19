import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn React Router', complete: false }
    ],
    filter: 'All'
  }

  setFilter = (filter) => {
                    // filter: filter
    this.setState({ filter })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
 

  addTodo = (name) => {
    const { todos } = this.state
                    // name: name
    const todo = { name, complete: false, id: this.getUniqId() }
    this.setState({ todos: [todo, ...todos] })
  }
  // renderTodos = () => {
  //   const { todos } = this.state 
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.name}</li>
  //     )
  //   })
  // }

  handleClick = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Completed':
        return todos.filter( t => t.complete )
      default:
        return todos
    }
  }

  render() {
    const { todos, filter } = this.state
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <List name="Bucket List" items={this.visibleItems()} todoClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}

export default App;