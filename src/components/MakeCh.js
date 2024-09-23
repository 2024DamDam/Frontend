import React, { useState } from 'react';
import Navbar from './Navbar';  // 필요 시 네비게이션 바 추가
import '../styles/MakeCh.css';  // 스타일 파일

const MakeCh = () => {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null); // 이미지 상태 관리

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // 프로필 이미지 업로드 핸들러
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // 선택한 이미지 미리보기
    }
  };

  const handleGoToFileUpload = () => {
    // 이름이 입력되지 않았을 경우 경고창을 띄움
    if (!name) {
      alert("이름을 입력해 주세요.");
    } else {
      // Django 서버의 URL로 이동
      window.location.href = 'http://127.0.0.1:8000/select_number_of_people/';
    }
  };

  return (
    <div className="makech-container">
      <Navbar />
      <div className="makech-content">
        <div className="profile-upload">
          <label htmlFor="profileImage" className="upload-icon">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-preview" />
            ) : (
              '+'  // 이미지가 없으면 + 표시
            )}
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            style={{ display: 'none' }}  // 파일 선택창 숨기기
            onChange={handleProfileImageChange}  // 이미지 파일 선택
          />
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
            onClick={handleGoToFileUpload}
            style={{ cursor: 'pointer' }}
          >
            음성 파일 업로드 하러 가기
          </label>
        </div>
      </div>
    </div>
  );
};

export default MakeCh;
