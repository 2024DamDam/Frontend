// src/api/api.js
export const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/');
    if (!response.ok) {
        throw new Error('네트워크 응답이 좋지 않습니다.');
    }
    const data = await response.json();
    return data.items; // items가 배열이라고 가정
};
