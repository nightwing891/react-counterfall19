import React from 'react';
import Todo from './Todo';

const List = ({ name, items }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Todo key={item.id} {...item} /> )}
    </ul>
  </div>
)

export default List;