import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import EditButton from './EditButton';

describe('Edit Button', () => {
  const div = document.createElement('div');
  test('Renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><EditButton /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Renders button', () => {
    render(<BrowserRouter><EditButton /></BrowserRouter>);
    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();
  });
});
