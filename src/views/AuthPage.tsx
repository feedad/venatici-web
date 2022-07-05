import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import LogoVenatici from '../assets/images/home-venacity.svg';
import AuthLogin from '../components/AuthLogin';
import AuthRegister from '../components/AuthRegister';

export default function AuthPage() {
  return (
    <div className='d-flex align-items-center container' style={{ height: '100vh' }}>

      {/* bg earth */}
      <div style={{ position: 'absolute', right: 0, top: -200, maxHeight: 'calc(100vh + 200px)', overflow: 'clip' }}>
        <img src={require('../assets/images/home-bg.png')} alt="" style={{ height: '200vh' }} />
      </div>

      {/* venacity logo */}
      <div className='position-absolute' style={{ right: 200, top: '50%', transform: 'translateY(-50%)' }}>
        <img src={LogoVenatici} alt="" className='floating' style={{  }} />
      </div>

      <div style={{ width: 350, position: 'relative' }}>
        {/* <AuthLogin/> */}
        {/* <AuthRegister/> */}
        <Outlet/>
        <Link to={'/'}>
          <div className='d-flex align-items-center justify-content-center text-muted' style={{ gap: 20 }}>
            <div>Back to Homepage</div>
            <i className="fa fa-arrow-circle-left"></i>
          </div>
        </Link>
      </div>
    </div>
  )
}