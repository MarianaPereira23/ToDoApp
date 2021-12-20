/* eslint-disable no-param-reassign */
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        title: action.payload.title,
        info: action.payload.info,
        done: action.payload.done,
        display: action.payload.display,
        id: action.payload.id,
      }];
    case 'TOGGLE_DONE':
      return state.map(task => {
        if (task.id === action.payload.id) {
          task.done = action.payload.done;
        }
        return task;
      });
    case 'TOGGLE_DISPLAY':
      return state.map(task => {
        if (task.id === action.payload.id) {
          task.display = action.payload.display;
        }
        return task;
      });
    case 'EDIT_TASK':
      return state.map(task => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.info = action.payload.info;
        }
        return task;
      });
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
