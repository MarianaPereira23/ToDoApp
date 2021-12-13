/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import store from '../../store';
import { toggleDone } from '../../actions/actions';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';
import './TodoCard.css';

const TodoCard = props => {
  const { todo } = props;

  const handleClick = e => {
    e.preventDefault();
    const task = {
      done: !todo.done,
      id: todo.id,
    };
    store.dispatch(toggleDone(task));
  };

  return (
    <div className={`todo-container__todo-item ${todo.done ? 'done' : ''} ${todo.display ? '' : 'hidden'}`} onClick={handleClick} tabIndex="-1" role="button">
      <h2 className="todo-container__todo-title">{todo.title}</h2>
      <p className="todo-container__todo-info">{todo.info}</p>
      {todo.done ? <RemoveButton todo={todo} /> : <EditButton todo={todo} />}
    </div>
  );
};

export default TodoCard;
