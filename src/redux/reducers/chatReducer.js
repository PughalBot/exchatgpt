import { TOGGLE_CHAT, SEND_MESSAGE } from '../actions/types';

const initialState = {
  isActive: false,
  conversation: []
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHAT:
      return {
        ...state,
        isActive: action.payload
      };
    case SEND_MESSAGE:
      return {
        ...state,
        conversation: [...state.conversation, action.payload]
      };
    default:
      return state;
  }
};

export default chatReducer;
