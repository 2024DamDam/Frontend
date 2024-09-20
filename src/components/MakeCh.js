import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 가져오기
import Navbar from './Navbar';  // 필요 시 네비게이션 바 추가
import '../styles/MakeCh.css';  // 스타일 파일

const MakeCh = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();  // useNavigate 훅 초기화

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGoToFileUpload = () => {
    navigate('/select-number-of-people');  // 네비게이트로 경로 이동
  };

  const handleSubmit = () => {
    console.log(name);
    navigate('/chat');  // chat 페이지로 이동
  };

  return (
    <div className="makech-container">
      <Navbar />
      <div className="makech-content">
        <div className="profile-upload">
          <label htmlFor="profileImage" className="upload-icon">
            +
          </label>
        </div>
        <input
          type="text"
          className="input-name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={handleNameChange}
        />
        <div className="file-upload">
          <label 
            className="file-label" 
            onClick={handleGoToFileUpload}  // 버튼 클릭 시 페이지 이동
            style={{ cursor: 'pointer' }}
          >
            대화 파일 업로드 하러 가기
          </label>
        </div>
        <button className="start-button" onClick={handleSubmit}>START</button>
      </div>
    </div>
  );
}

export default MakeCh;
