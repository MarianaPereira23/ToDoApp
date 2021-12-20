/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { toggleDisplay } from '../../actions/actions';
import './ToggleDisplay.css';

const ToggleDisplay = () => {
  const todoList = useSelector(state => state);

  const doneTodos = todoList.filter(todo => todo.done === true);
  const shownTodos = doneTodos.filter(todo => todo.display === true);
  const hiddenTodos = doneTodos.filter(todo => todo.display === false);

  const handleHide = e => {
    e.preventDefault();
    shownTodos.forEach(task => {
      task.display = false;
      store.dispatch(toggleDisplay(task));
    });
  };

  const handleShow = e => {
    e.preventDefault();
    hiddenTodos.forEach(task => {
      task.display = true;
      store.dispatch(toggleDisplay(task));
    });
  };

  return (
    <div className="toggle-container">
      <div className={`toggle-container__hide ${shownTodos.length > 0 ? '' : 'hidden'}`}>
        <button className="toggle-container__button" onClick={handleHide}>Hide done tasks</button>
      </div>
      <div className={`toggle-container__show ${hiddenTodos.length > 0 ? '' : 'hidden'}`}>
        <button className="toggle-container__button" onClick={handleShow}>Show done tasks</button>
      </div>
    </div>
  );
};

export default ToggleDisplay;
