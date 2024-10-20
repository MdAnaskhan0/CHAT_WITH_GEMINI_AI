import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import MainBody from './Components/Main/MainBody';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainBody />
    </div>
  );
};

export default App;
