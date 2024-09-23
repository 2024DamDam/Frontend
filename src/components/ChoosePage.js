import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChoosePage.css';
import leeChungAh from '../photo/이청아.png';
import gongHyoJin from '../photo/공효진.png';
import parkYoungHo from '../photo/박영호.png';
import limYooJin from '../photo/임유진.png';
import hwangJungMin from '../photo/황정민.png';
import parkBoGum from '../photo/박보검.png';
import loopy from '../photo/루피.png';

const ChoosePage = () => {
  return (
    <div className="make-container">
      <Navbar /> {/* 툴바 컴포넌트 사용 */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>

      <div className="character-grid">
        {/* 첫 번째 캐릭터 - 이청아 */}
        <Link to="/chooseCh" className="character-box">
          <img src={leeChungAh} alt="이청아" />
          <p>이청아</p>
        </Link>
        
        {/* 두 번째 캐릭터 - 공효진 */}
        <Link to="/chooseCh1" className="character-box">
          <img src={gongHyoJin} alt="공효진" />
          <p>공효진</p>
        </Link>

        {/* 세 번째 캐릭터 - 박영호 */}
        <Link to="/chooseCh2" className="character-box">
          <img src={parkYoungHo} alt="박영호" />
          <p>박영호</p>
        </Link>

        {/* 네 번째 캐릭터 - 임유진 */}
        <Link to="/chooseCh3" className="character-box">
          <img src={limYooJin} alt="임유진" />
          <p>임유진</p>
        </Link>

        {/* 다섯 번째 캐릭터 - 황정민 */}
        <Link to="/chooseCh4" className="character-box">
          <img src={hwangJungMin} alt="황정민" />
          <p>황정민</p>
        </Link>

        {/* 여섯 번째 캐릭터 - 박보검 */}
        <Link to="/chooseCh5" className="character-box">
          <img src={parkBoGum} alt="박보검" />
          <p>박보검</p>
        </Link>

        {/* 일곱 번째 캐릭터 - 루피 */}
        <Link to="/chooseCh6" className="character-box">
          <img src={loopy} alt="루피" />
          <p>루피</p>
        </Link>

        <div className="empty-box"></div>
      </div>
    </div>
  );
};

export default ChoosePage;
