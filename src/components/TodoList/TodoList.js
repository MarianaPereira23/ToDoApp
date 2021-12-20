import React from 'react';
import { useSelector } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';

const TodoList = () => {
  const todoList = useSelector(state => state);

  const render = arr => arr.map(task => <TodoCard todo={task} key={task.id} />);

  return (
    <section className="todo-container">
      {render(todoList)}
    </section>
  );
};

export default TodoList;
