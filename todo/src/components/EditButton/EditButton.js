/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EditButton.css';

const EditButton = props => {
  const { todo } = props;
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate(`/edit/${todo.id}`);
    e.stopPropagation();
  };

  return (
    <button className="todo-container__todo-edit" type="button" onClick={handleClick}>
      Edit
    </button>
  );
};

export default EditButton;
