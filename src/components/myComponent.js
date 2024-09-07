import React, { useState, useEffect } from 'react';

const YourComponent = () => {
    const [data, setData] = useState([]); // 초기값을 빈 배열로 설정

    useEffect(() => {
        // 데이터를 가져오는 API 호출 예시
        fetch('http://127.0.0.1:8000/')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setData(data);
                } else {
                    console.error('데이터 형식이 올바르지 않습니다:', data);
                }
            })
            .catch(error => console.error('API 호출 오류:', error));
    }, []);

    return (
        <div>
            {Array.isArray(data) ? (
                data.map(item => <div key={item.id}>{item.name}</div>)
            ) : (
                <div>데이터를 불러올 수 없습니다.</div>
            )}
        </div>
    );
};

export default YourComponent;
