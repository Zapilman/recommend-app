import './style.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
