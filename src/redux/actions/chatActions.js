import api from '../../apiConfig';
import { TOGGLE_CHAT, SEND_MESSAGE } from './types';

export const toggleChat = (isActive) => ({
  type: TOGGLE_CHAT,
  payload: isActive,
});

export const sendMessage = (message) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/posts', { message });
      const botReply = response.data.message; // Assuming the API response returns the bot's reply

      dispatch({
        type: SEND_MESSAGE,
        payload: botReply,
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('API response error:', error.response.data);
        const errorMessage = error.response.data.error; // Assuming the API response has an "error" field

        dispatch({
          type: SEND_MESSAGE,
          payload: errorMessage,
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.error('API request error:', error.request);
        const errorMessage = 'Network Error. Please try again later.';

        dispatch({
          type: SEND_MESSAGE,
          payload: errorMessage,
        });
      } else {
        // Something else happened in making the request
        console.error('API error:', error);
        const errorMessage = 'An error occurred. Please try again.';

        dispatch({
          type: SEND_MESSAGE,
          payload: errorMessage,
        });
      }
    }
  };
};
