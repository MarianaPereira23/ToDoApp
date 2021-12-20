import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import todoReducer from './reducers/reducers';

const savedState = loadState();

const initialState = savedState;

const store = createStore(todoReducer, initialState);

store.subscribe(() => saveState(store.getState()));

export default store;
