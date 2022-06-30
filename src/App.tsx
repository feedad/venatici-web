import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/styles.scss';
import AboutPage from './views/AboutPage';
import HomePage from './views/HomePage';
import UpcomingPage from './views/UpcomingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='upcoming' element={<UpcomingPage/>}></Route>
        <Route path='about' element={<AboutPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
