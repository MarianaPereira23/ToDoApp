import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { addTask } from '../../actions/actions';
import TodoList from './TodoList';

configure({ adapter: new Adapter() });

describe('Todo List', () => {
  const div = document.createElement('div');
  const todo = {
    title: 'Test',
    info: 'Write more tests for my todo app',
    done: false,
    id: 1,
  };
  const otherTodo = {
    title: 'Todo App',
    info: 'Build basic functionality for todo app',
    done: true,
    id: 2,
  };
  const initialState = [];
  const mockStore = configureStore();
  const store = mockStore(initialState);
  store.dispatch(addTask(todo));
  store.dispatch(addTask(otherTodo));

  test('Renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><TodoList /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Renders correct number of todos', () => {
    const todoList = store.getState();
    const wrapper = shallow(<Provider store={store}><TodoList /></Provider>);
    expect(wrapper.dive().find('TodoCard').length).toBe(todoList.length);
  });
});
