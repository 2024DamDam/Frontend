import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';  // 필요 시 네비게이션 바 추가
import '../styles/SelectNumberOfPeople.css';  // 스타일 파일

const SelectNumberOfPeople = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);  // 기본 인원 수를 1로 설정
  const navigate = useNavigate();

  const handleNumberChange = (event) => {
    setNumberOfPeople(event.target.value);  // 선택한 인원 수를 상태로 관리
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("선택된 인원 수: ", numberOfPeople);
    
    // 경로가 올바르게 설정되었는지 확인 후 이동
    navigate('/file-upload-separate');  // 다음 페이지로 이동
  };

  return (
    <div className="container">
      <Navbar /> {/* 네비게이션 바가 필요하지 않으면 제거 가능 */}
      <h1>사람 인원 수를 선택하시오</h1>
      <form onSubmit={handleSubmit}>
        <label>
          인원 수:
          <select value={numberOfPeople} onChange={handleNumberChange}>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </label>
        <button type="submit" className="submit-button">다음</button>
      </form>
    </div>
  );
};

export default SelectNumberOfPeople;
