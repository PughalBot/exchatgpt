import { createStore } from 'redux';
import rootReducer from './reducers';

// Define initial state if needed
const initialState = {
  chat: {
    isActive: false,
    conversation: []
  }
};

const store = createStore(rootReducer, initialState);

export default store;
