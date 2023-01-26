import './style.css';
import React from 'react';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './modules/Header/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
