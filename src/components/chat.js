import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 가져오기
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import '../styles/ChatGPTClone.css'; // 새로 추가할 CSS 파일

const ChatGPTClone = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState([]);
  const [recognizing, setRecognizing] = useState(false);
  const [recognition, setRecognition] = useState(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');

    const dateTime = new Date();
    const time = dateTime.toLocaleTimeString();

    // 사용자가 입력한 질문 추가
    setResponse((prev) => [...prev, { text: prompt, sender: 'user', time }]);
    setPrompt('');

    fetch('/query_view/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse((prev) => [...prev, { text: data.response, sender: 'bot', time }]);
        
        const audioPlayer = document.getElementById('audio-player');
        const audioData = window.atob(data.audio_data); // base64 디코딩
        const bytes = new Uint8Array(audioData.length);

        for (let i = 0; i < audioData.length; i++) {
          bytes[i] = audioData.charCodeAt(i);
        }

        const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioUrl;
        audioPlayer.play();
      });
  };

  const handleVoiceInput = () => {
    if (recognizing) {
      recognition.stop();
      return;
    }
    recognition.lang = 'ko-KR';
    recognition.start();
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
