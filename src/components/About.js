import React from 'react';
import '../styles/About.css'; // About 페이지에 대한 CSS 파일

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>프로젝트 담담 소개</h1>
        <p>
          프로젝트 이름 <strong>담담</strong>은 이미 구현된 아바타와도 대화하고 사용자가 생성한 아바타와도 대화한다는 의미를 담고 있습니다. 저희는 고인을 그리워하는 유가족, 연예인이나 애니메이션 캐릭터 등 실제로 만날 수 없거나 실존하지 않는 인물과 대화하고 싶은 사용자를 주 타겟층으로 설정하였습니다.
        </p>
        <p>
          이 웹 어플리케이션은 사용자가 아바타와 대화할 수 있도록 지원하며, 장고와 파이썬을 기반으로 구축되었습니다. 프로젝트는 여러 오픈 소스와 API를 활용합니다. 예를 들어, <strong>Pyannote</strong>, <strong>ElevenLabs</strong>는 보이스 생성을 위한 API로 사용되며, 오픈 AI의 <strong>ChatGPT</strong>는 대화 텍스트 학습과 텍스트 기반의 대화 처리를 담당합니다. 프론트는 <strong>리액트</strong>로, 백은 <strong>장고</strong>로 진행하였습니다.
        </p>
        <p>
          웹사이트 인터페이스는 매우 직관적입니다. 사용자는 홈페이지에서 기존 챗봇을 선택하거나 새로운 챗봇을 생성할 수 있습니다. 기존 챗봇을 선택하는 옵션을 클릭하면, 챗봇들이 해시태그와 함께 나열되며, 검색창을 통해 이름이나 해시태그로 챗봇을 검색할 수 있습니다.
        </p>
        <p>
          선택된 챗봇의 자세한 정보를 볼 수 있는 페이지로 이동하면, 해시태그와 간단한 자기소개를 통해 챗봇을 더 잘 이해할 수 있습니다. 대화를 시작하고 싶다면 '시작' 버튼을 클릭하여 텍스트와 음성 메시지를 통해 대화를 진행할 수 있습니다. 
        </p>
        <p>
          새로운 챗봇 만들기는 사용자가 챗봇의 프로필을 직접 설정할 수 있는 기능을 제공합니다. 사진, 이름, 대화 내용 및 음성 파일을 업로드하면 그 정보를 바탕으로 새로운 챗봇이 생성됩니다.
        </p>
      </div>
      {/* 사진 삽입을 위한 섹션 */}
      <div className="about-images">
        <img src="path_to_your_image1.png" alt="Chatbot Example" />
        <img src="path_to_your_image2.png" alt="User Chatbot Creation" />
      </div>
    </div>
  );
}

export default About;
