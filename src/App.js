/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';
import ToggleDisplay from './components/ToggleDisplay/ToggleDisplay';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={(
        <section className="page-container">
          <Form />
          <ToggleDisplay />
          <TodoList />
        </section>
      )} />
      <Route path="/edit/:id" element={(
        <section className="page-container">
          <EditForm />
        </section>
      )} />
    </Routes>
  </div>
);

export default App;
