import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import RemoveButton from './RemoveButton';

describe('Remove Button', () => {
  const div = document.createElement('div');
  test('Renders without crashing', () => {
    ReactDOM.render(<RemoveButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Renders button', () => {
    render(<RemoveButton />);
    const removeButton = screen.getByText('Remove');
    expect(removeButton).toBeInTheDocument();
  });
});
