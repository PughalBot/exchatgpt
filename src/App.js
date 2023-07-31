import React from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from './components/ToggleButton';
import ChatModal from './components/ChatModal';

const App = () => {
  const isChatActive = useSelector(state => state.chat.isActive);

  return (
    <div>
      <ToggleButton />
      {isChatActive && <ChatModal />}
    </div>
  );
};

export default App;
