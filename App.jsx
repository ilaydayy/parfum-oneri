import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './components/Home.css';
import PerfumesPage from './components/PerfumesPage';
import FavoritesPage from './components/FavoritesPage';
import BlogPage from './components/BlogPage';
import LoginPage from './components/LoginPage';
import ChatbotPage from './components/ChatbotPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfumes" element={<PerfumesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
