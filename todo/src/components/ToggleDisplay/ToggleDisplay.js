/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { toggleDisplay } from '../../actions/actions';
import './ToggleDisplay.css';

const ToggleDisplay = () => {
  const todoList = useSelector(state => state);

  const doneTodos = todoList.filter(todo => todo.done === true);

  const handleClick = e => {
    e.preventDefault();
    doneTodos.forEach(task => {
      task.display = !task.display;
      store.dispatch(toggleDisplay(task));
    });
    if (doneTodos[0].display) {
      e.target.textContent = 'Hide done tasks';
      return;
    }
    e.target.textContent = 'Show done tasks';
  };

  const hiddenTodos = todoList.filter(todo => todo.display === false);

  return (
    <div className={`toggle-container ${doneTodos.length > 0 ? '' : 'hidden'}`}>
      <button type="submit" className="toggle-container__button" onClick={handleClick}>{hiddenTodos.length > 0 ? 'Show done tasks' : 'Hide done tasks'}</button>
    </div>
  );
};

export default ToggleDisplay;
