import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ChoosePage from './components/ChoosePage';
import ChooseCh from './components/ChooseCh';
import MakePage from './components/MakePage';
import MakeCh from './components/MakeCh';
import ChatGPTClone from './components/chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/choose" element={<ChoosePage />} /> 
        <Route path="/choose-new1" element={<ChooseCh />} /> 
        <Route path="/make" element={<MakePage />} /> 
        <Route path="/make-new1" element={<MakeCh />} /> 
        <Route path="/chat" element={<ChatGPTClone />} />
      </Routes>
    </Router>
  );
};

export default App;
