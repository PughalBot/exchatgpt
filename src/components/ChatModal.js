import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/actions/chatActions';

const ChatModal = () => {
  const [question, setQuestion] = useState('');
  const conversation = useSelector((state) => state.chat.conversation);
  const error = useSelector((state) => state.chat.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(question));
    setQuestion('');
  };

  return (
    <div>
      <ul>
        {conversation.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ChatModal;
