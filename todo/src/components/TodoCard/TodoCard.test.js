import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoCard from './TodoCard';

configure({ adapter: new Adapter() });

describe('Todo Card', () => {
  const div = document.createElement('div');
  const todo = {
    title: 'Test',
    info: 'Write more tests for my todo app',
    done: false,
    id: 1,
  };
  const todoDone = {
    title: 'Todo App',
    info: 'Build basic functionality for todo app',
    done: true,
    id: 1,
  };
  test('Renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><TodoCard todo={todo} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Renders task title, description and remove button', () => {
    render(<BrowserRouter><TodoCard todo={todoDone} /></BrowserRouter>);
    const title = screen.getByText('Todo App');
    const description = screen.getByText('Build basic functionality for todo app');
    const removeButton = screen.getByText('Remove');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });
});
