import React, { Component } from 'react';
import List from './components/todos/List';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn React Router', complete: false }
    ]
  }

  // renderTodos = () => {
  //   const { todos } = this.state 
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.name}</li>
  //     )
  //   })
  // }

  render() {
    const { todos } = this.state
    return (
      <div>
        <List name="Bucket List" items={todos} />
      </div>
    )
  }
}

export default App;