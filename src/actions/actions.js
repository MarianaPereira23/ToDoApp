export const addTask = todo => ({
  type: 'ADD_TASK',
  payload: {
    title: todo.title,
    info: todo.info,
    done: todo.done,
    display: todo.display,
    id: todo.id,
  },
});

export const toggleDone = todo => ({
  type: 'TOGGLE_DONE',
  payload: {
    done: todo.done,
    id: todo.id,
  },
});

export const toggleDisplay = todo => ({
  type: 'TOGGLE_DISPLAY',
  payload: {
    display: todo.display,
    id: todo.id,
  },
});

export const editTask = todo => ({
  type: 'EDIT_TASK',
  payload: {
    title: todo.title,
    info: todo.info,
    id: todo.id,
  },
});

export const deleteTask = todo => ({
  type: 'DELETE_TASK',
  payload: {
    id: todo.id,
  },
});
