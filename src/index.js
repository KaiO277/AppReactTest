import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> // Đã xóa StrictMode
);

// Nếu bạn muốn bắt đầu đo hiệu suất trong ứng dụng của mình, truyền một hàm
// để ghi kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một endpoint phân tích. Tìm hiểu thêm: https://bit.ly/CRA-vitals
reportWebVitals();

