import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ChoosePage from './components/ChoosePage';
import ChooseCh from './components/ChooseCh';
import ChooseCh1 from './components/ChooseCh1';
import ChooseCh2 from './components/ChooseCh2';
import ChooseCh3 from './components/ChooseCh3';
import ChooseCh4 from './components/ChooseCh4';
import ChooseCh5 from './components/ChooseCh5';
import ChooseCh6 from './components/ChooseCh6';
import MakeCh from './components/MakeCh';
import ChatGPTClone from './components/chat';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/choose" element={<ChoosePage />} /> 
        {/* 각 캐릭터에 맞는 컴포넌트로 이동 */}
        <Route path="/chooseCh" element={<ChooseCh />} /> 
        <Route path="/chooseCh1" element={<ChooseCh1 />} /> 
        <Route path="/chooseCh2" element={<ChooseCh2 />} /> 
        <Route path="/chooseCh3" element={<ChooseCh3 />} /> 
        <Route path="/chooseCh4" element={<ChooseCh4 />} /> 
        <Route path="/chooseCh5" element={<ChooseCh5 />} />
        <Route path="/chooseCh6" element={<ChooseCh6 />} />
        <Route path="/make-new1" element={<MakeCh />} /> 
        <Route path="/chat" element={<ChatGPTClone />} />
      </Routes>
    </Router>
  );
};

export default App;
