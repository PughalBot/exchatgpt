import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChat } from '../redux/actions/chatActions';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const isChatActive = useSelector(state => state.chat.isActive);

  const handleClick = () => {
    dispatch(toggleChat(!isChatActive));
  };

  return (
    <button onClick={handleClick}>
      {isChatActive ? 'Deactivate ChatGPT' : 'Activate ChatGPT'}
    </button>
  );
};

export default ToggleButton;
