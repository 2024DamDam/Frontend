import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import '../styles/ChatGPTClone.css'; // 새로 추가할 CSS 파일

const ChatGPTClone = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState([]);
  const [recognizing, setRecognizing] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const audioPlayer = document.getElementById('audio-player');

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    const currentDateTime = new Date();
    const time = currentDateTime.toLocaleTimeString();

    // 사용자가 입력한 질문 추가
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
      setResponse((prev) => [...prev, { text: data.response, sender: 'bot', time: new Date().toLocaleTimeString() }]);

      // 음성 데이터 처리
      if (data.audio_data) {
        const audioData = atob(data.audio_data); // base64 디코딩
        const bytes = new Uint8Array(audioData.length);
        for (let i = 0; i < audioData.length; i++) {
          bytes[i] = audioData.charCodeAt(i);
        }

        const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioUrl;
        audioPlayer.play();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

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
      <Navbar /> {/* 툴바 컴포넌트 사용 */}
      <div className="search-bar"></div>

      <div className="chat-box">
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
      <audio id="audio-player" controls style={{ display: 'none' }}></audio>
    </div>
  );
};

export default ChatGPTClone;
