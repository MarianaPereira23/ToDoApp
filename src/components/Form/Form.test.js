import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Renders all form elements', () => {
    render(<Form />);
    const addButton = screen.getAllByRole('button')[0];
    const titleInput = screen.getByPlaceholderText('Task Title*');
    const descriptInput = screen.getByPlaceholderText('Description');
    expect(addButton).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(descriptInput).toBeInTheDocument();
  });
});
