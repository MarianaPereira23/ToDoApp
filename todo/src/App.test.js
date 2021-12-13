/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

describe('Redux store', () => {
  it('gets todos', () => {
    const todoList = store.getState();
    expect(todoList).toEqual([]);
  });
});
describe('App', () => {
  const div = document.createElement('div');
  test('Renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('App snapshot', () => {
    const AppComponent = renderer.create(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
  test('Click events work - add task, change task to done and remove task', () => {
    render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
    const titleInput = screen.getByPlaceholderText('Task Title*');
    fireEvent.change(titleInput, { target: { value: 'Do stuff' } });
    expect(titleInput.value).toEqual('Do stuff');

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Do stuff')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Edit'));

    const titleChangeInput = screen.getByDisplayValue('Do stuff');
    fireEvent.change(titleChangeInput, { target: { value: 'Do a lot of stuff' } });
    expect(titleChangeInput.value).toEqual('Do a lot of stuff');

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Do a lot of stuff')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Do a lot of stuff'));
    expect(screen.getByText('Do a lot of stuff').parentNode.classList.length).toBe(2);
    expect(screen.getByText('Do a lot of stuff').parentNode.classList[1]).toBe('done');

    fireEvent.click(screen.getByText('Remove'));

    expect(screen.queryByText('Do a lot of stuff')).toBeNull();
  });
});
