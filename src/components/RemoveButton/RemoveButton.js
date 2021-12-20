/* eslint-disable react/prop-types */
import React from 'react';
import store from '../../store';
import { deleteTask } from '../../actions/actions';
import './RemoveButton.css';

const RemoveButton = props => {
  const { todo } = props;
  const handleDelete = e => {
    e.preventDefault();
    const task = {
      id: todo.id,
    };
    store.dispatch(deleteTask(task));
    e.stopPropagation();
  };

  return (
    <button className="todo-container__todo-remove" type="button" onClick={handleDelete}>
      Remove
    </button>
  );
};

export default RemoveButton;
