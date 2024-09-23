//MakePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/MakePage.css';

const MakePage = () => {
  return (
    <div className="make-container">
      <Navbar /> {/* 툴바 컴포넌트 사용 */}

      <div className="character-grid">
        {/* 첫 번째 캐릭터 - 비활성화 */}
        <div className="character-box disabled">
          <img src="character1.png" alt="캐릭터 1" />
          <p>아바타1</p>
        </div>
        
        {/* 두 번째 캐릭터 - 비활성화 */}
        <div className="character-box disabled">
          <img src="character2.png" alt="캐릭터 2" />
          <p>아바타2</p>
        </div>
        
        {/* 세 번째 캐릭터 - 새로 만들기 활성화 */}
        <div className="character-box">
          <Link to="/make-new1" className="add-character">
            <div className="plus-sign">+</div>
          </Link>
        </div>
        
        {/* 나머지 캐릭터 - 비활성화 */}
        <div className="character-box disabled">
          <div className="plus-sign">+</div>
        </div>
        <div className="character-box disabled">
          <div className="plus-sign">+</div>
        </div>
        <div className="character-box disabled">
          <div className="plus-sign">+</div>
        </div>
        <div className="character-box disabled">
          <div className="plus-sign">+</div>
        </div>
        <div className="character-box disabled">
          <div className="plus-sign">+</div>
        </div>
      </div>
    </div>
  );
};

export default MakePage;