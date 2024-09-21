import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import '../styles/ChatGPTClone.css'; // 새로 추가할 CSS 파일

const ChatGPTClone = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState([]);
  const [fileContent, setFileContent] = useState(''); // 파일 내용 저장
  const [recognizing, setRecognizing] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const audioPlayer = React.useRef(null); // useRef로 audioPlayer 접근

  // 음성 인식 초기화
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const rec = new window.webkitSpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;

      rec.onstart = () => setRecognizing(true);
      rec.onerror = (event) => console.error(event.error);
      rec.onend = () => setRecognizing(false);
      rec.onresult = (event) => {
        let interim_transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            setPrompt((prev) => prev + event.results[i][0].transcript);
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
      };

      setRecognition(rec);
    }
  }, []);

  // 파일 읽기 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result); // 파일 내용을 상태에 저장
    };
    reader.readAsText(file); // 텍스트 파일 읽기
  };

  // 파일 전송 처리
  const handleFileSend = async () => {
    const csrftoken = Cookies.get('csrftoken');
    const currentDateTime = new Date();
    const time = currentDateTime.toLocaleTimeString();

    try {
      // 파일 내용이 있는지 확인 후 파일 전송
      if (fileContent) {
        const res = await fetch('http://localhost:8000/query_view/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          },
          body: JSON.stringify({ prompt: '안녕' }), // "안녕" 메시지를 ChatGPT로 전송
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();

        // 파일이 성공적으로 전송되었음을 알림
        setResponse((prev) => [
          ...prev,
          { text: data.response || '안녕! 파일 잘 받았어!', sender: 'bot', time },
        ]);

        // 음성 데이터 처리
        if (data.audio_base64) {
          const audioData = atob(data.audio_base64); // base64 디코딩
          const bytes = new Uint8Array(audioData.length);
          for (let i = 0; i < audioData.length; i++) {
            bytes[i] = audioData.charCodeAt(i);
          }

          const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);

          if (audioPlayer.current) {
            audioPlayer.current.src = audioUrl;
            audioPlayer.current.play();
          }
        }
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // 일반 메시지 전송 처리
  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    const currentDateTime = new Date();
    const time = currentDateTime.toLocaleTimeString();

    setResponse((prev) => [...prev, { text: prompt, sender: 'user', time }]);
    setPrompt('');

    try {
      const res = await fetch('http://localhost:8000/query_view/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();

      // 서버 응답 추가
      setResponse((prev) => [
        ...prev,
        { text: data.response, sender: 'bot', time: new Date().toLocaleTimeString() },
      ]);

      // 음성 데이터 처리
      if (data.audio_base64) {
        const audioData = atob(data.audio_base64); // base64 디코딩
        const bytes = new Uint8Array(audioData.length);
        for (let i = 0; i < audioData.length; i++) {
          bytes[i] = audioData.charCodeAt(i);
        }

        const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (audioPlayer.current) {
          audioPlayer.current.src = audioUrl;
          audioPlayer.current.play();
        }
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // 음성 입력 처리
  const handleVoiceInput = () => {
    if (recognizing) {
      recognition.stop();
    } else {
      recognition.lang = 'ko-KR';
      recognition.start();
    }
  };

  return (
    <div className="make-container">
      <Navbar /> {/* 네비게이션 바 */}
      <div className="search-bar"></div>

      <div className="chat-box">
        <div className="file-upload">
          <label htmlFor="file-upload" className="file-label">파일 업로드:</label>
          <input type="file" id="file-upload" onChange={handleFileChange} />
          <button onClick={handleFileSend} style={{ padding: '5px 10px' }}>파일 전송</button> {/* 파일 전송 버튼 */}
        </div>
        <div className="messages">
          {response.map((res, index) => (
            <div key={index} className={`message ${res.sender}`}>
              <div className="message-content">
                <p>{res.text}</p>
                <span className="message-time">{res.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="input-bar">
          <form onSubmit={handleSubmit}>
            <textarea
              className="input-field"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write your message"
            ></textarea>
            <button type="submit" className="send-button">Send</button>
            <button type="button" className="voice-button" onClick={handleVoiceInput}>
              🎤
            </button>
          </form>
        </div>
      </div>
      <audio ref={audioPlayer} controls style={{ display: 'none' }}></audio> {/* useRef로 audioPlayer 접근 */}
    </div>
  );
};

export default ChatGPTClone;
