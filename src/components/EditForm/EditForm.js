import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import store from '../../store';
import { editTask } from '../../actions/actions';
import './EditForm.css';

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todoList = useSelector(state => state);
  const taskToEdit = todoList.find(task => task.id === id);

  const handleSubmit = e => {
    e.preventDefault();
    const task = {
      title: e.target.children[1].value,
      info: e.target.children[2].value,
      id,
    };
    store.dispatch(editTask(task));
    navigate('/');
  };

  return (
    <section className="form-container">
      <form className="editTodo-form" onSubmit={handleSubmit}>
        <button type="submit" className="editTodo-form__edit-btn">
          <FontAwesomeIcon icon={faEdit} className="edit-button__icon" />
        </button>
        <input type="text" className="editTodo-form__title" defaultValue={taskToEdit.title} required />
        <input type="textarea" className="editTodo-form__description" defaultValue={taskToEdit.info !== '' ? taskToEdit.info : ''} placeholder={taskToEdit.info === '' ? 'Add description' : ''} />
      </form>
    </section>
  );
};

export default EditForm;
