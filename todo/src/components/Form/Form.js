import React from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import store from '../../store';
import { addTask } from '../../actions/actions';
import './Form.css';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const task = {
      title: e.target.children[1].value,
      info: e.target.children[2].value,
      done: false,
      display: true,
      id: uuid(),
    };
    store.dispatch(addTask(task));
    e.target.children[1].value = '';
    e.target.children[2].value = '';
  };

  return (
    <section className="form-container">
      <form className="addTodo-form" onSubmit={handleSubmit}>
        <button type="submit" className="addTodo-form__add-btn">
          <FontAwesomeIcon icon={faPlus} className="add-button__icon" />
        </button>
        <input type="text" className="addTodo-form__title" placeholder="Task Title*" required />
        <input type="textarea" className="addTodo-form__description" placeholder="Description" />
      </form>
    </section>
  );
};

export default Form;
