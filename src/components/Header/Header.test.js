import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  const div = document.createElement('div');
  test('Renders without crashing', () => {
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Header snapshot', () => {
    const HeaderComponent = renderer.create(<Header />).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
  test('Renders page title', () => {
    render(<Header />);
    const title = screen.getByText('Todays Goals');
    expect(title).toBeInTheDocument();
  });
});
