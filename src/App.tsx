import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';
import './styles/styles.scss';
import AboutPage from './views/AboutPage';
import AuthPage from './views/AuthPage';
import HomePage from './views/HomePage';
import MintPage from './views/MintPage';
import NftPage from './views/NftPage';
import PastPage from './views/PastPage';
import UpcomingPage from './views/UpcomingPage';

function App() {
  return (
    <Router>
      <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='upcoming' element={<UpcomingPage/>}></Route>
          <Route path='past' element={<PastPage/>}></Route>
          <Route path='nft' element={<NftPage/>}></Route>
          <Route path='mint' element={<MintPage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>

          <Route path='auth' element={<AuthPage/>}>
            <Route path="" element={<Navigate to={'login'} replace/>}/>
            <Route path='login' element={<AuthLogin/>}/>
            <Route path='register' element={<AuthRegister/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
