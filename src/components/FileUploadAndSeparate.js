import React, { useState } from 'react';
import Navbar from './Navbar';  // 필요 시 네비게이션 바 추가
import '../styles/FileUploadAndSeparate.css';  // 스타일 파일 필요 시 추가

const FileUploadAndSeparate = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setErrorMessage('');  // 파일이 선택되면 에러 메시지 제거
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setErrorMessage('파일을 선택해 주세요.');
      return;
    }
    
    // 파일 업로드 로직 추가
    console.log("파일 업로드 중:", file);

    // 여기에 파일 업로드를 서버로 전송하는 코드 작성
    // 예를 들어, fetch나 axios로 서버에 POST 요청을 보낼 수 있습니다.
  };

  return (
    <div className="container">
      <Navbar />  {/* 네비게이션 바 필요 시 사용 */}
      <h1>목소리 분리하고 생성하기</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept="audio/*"  // 오디오 파일만 선택 가능
        />
        <button type="submit" className="submit-button">업로드하고 분리하기</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default FileUploadAndSeparate;
