import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatPage from './components/ChatPage';
import ReactMarkdown from 'react-markdown';

function App() {
  const text = "![Product Image](https://cdn.shopify.com/s/files/1/0781/4797/7543/files/img_152411_db0d40262f86430dee90a07df7c33d5f_1.png?v=1696875354)](https://cdn.shopify.com/s/files/1/0781/4797/7543/files/img_152411_db0d40262f86430dee90a07df7c33d5f_1.png?v=1696875354)"
  return (
    <ReactMarkdown>{text}</ReactMarkdown>
  );
}

export default App;
