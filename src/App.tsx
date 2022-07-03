import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/styles.scss';
import AboutPage from './views/AboutPage';
import AuthPage from './views/AuthPage';
import HomePage from './views/HomePage';
import NftPage from './views/NftPage';
import PastPage from './views/PastPage';
import UpcomingPage from './views/UpcomingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='upcoming' element={<UpcomingPage/>}></Route>
        <Route path='past' element={<PastPage/>}></Route>
        <Route path='nft' element={<NftPage/>}></Route>
        <Route path='about' element={<AboutPage/>}></Route>

        <Route path='login' element={<AuthPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
