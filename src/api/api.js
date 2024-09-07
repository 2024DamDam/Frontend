import Cookies from 'js-cookie';

// Django 서버로 POST 요청을 보내는 함수
export const postRequest = async (url, data) => {
  const csrftoken = Cookies.get('csrftoken');  // 쿠키에서 CSRF 토큰을 가져옴

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,  // CSRF 토큰을 헤더에 추가
    },
    body: JSON.stringify(data),  // 데이터를 JSON 형식으로 전송
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();  // 응답 데이터를 JSON으로 변환하여 반환
};
