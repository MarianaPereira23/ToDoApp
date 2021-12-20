import todoReducer from './reducers';

describe('Reducer', () => {
  test('Add task is correct', () => {
    const action = {
      type: 'ADD_TASK',
      payload: {
        title: 'Test',
        info: 'do stuff',
        done: false,
        id: 1,
      },
    };
    expect(todoReducer([], action)).toEqual([action.payload]);
  });

  test('Toggle done is correct', () => {
    const state = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: false,
    }];
    const action = {
      type: 'TOGGLE_DONE',
      payload: {
        done: true,
        id: 1,
      },
    };
    const expectedResult = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: true,
    }];
    expect(todoReducer(state, action)).toEqual(expectedResult);
  });

  test('Toggle display is correct', () => {
    const state = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: true,
      display: true,
    }];
    const action = {
      type: 'TOGGLE_DISPLAY',
      payload: {
        display: false,
        id: 1,
      },
    };
    const expectedResult = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: true,
      display: false,
    }];
    expect(todoReducer(state, action)).toEqual(expectedResult);
  });

  test('Edit task is correct', () => {
    const state = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: false,
    }];
    const action = {
      type: 'EDIT_TASK',
      payload: {
        title: 'Test',
        info: 'do even more stuff',
        id: 1,
      },
    };
    const expectedResult = [{
      title: 'Test',
      info: 'do even more stuff',
      id: 1,
      done: false,
    }];
    expect(todoReducer(state, action)).toEqual(expectedResult);
  });
  test('Delete task is correct', () => {
    const state = [{
      title: 'Test',
      info: 'do stuff',
      id: 1,
      done: false,
    }];
    const action = {
      type: 'DELETE_TASK',
      payload: {
        id: 1,
      },
    };
    expect(todoReducer(state, action)).toEqual([]);
  });
});
