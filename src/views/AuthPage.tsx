import React from 'react'
import { Link } from 'react-router-dom';
import LogoVenatici from '../assets/images/home-venacity.svg';

export default function AuthPage() {
  return (
    <div className='d-flex align-items-center container' style={{ height: '100vh' }}>

      {/* bg earth */}
      <img src={require('../assets/images/home-bg.png')} alt="" style={{ position: 'absolute', height: '200vh', right: 0, top: -200 }} />

      {/* venacity logo */}
      <img src={LogoVenatici} alt="" className='floating' style={{ position: 'absolute', right: 200, top: 400 }} />

      <div style={{ width: 350 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '3rem' }}>Nice to see you again</div>
        <div className="mb-3">
          <label className='label' htmlFor="">Username or Email</label>
          <input type="text" className="form-control p-3" placeholder='Enter username or password' />
        </div>
        <div className="mb-4">
          <label className='label' htmlFor="">Password</label>
          <input type="password" className="form-control p-3" placeholder='Enter password' />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-5">
          <div className="form-check form-switch form-switch-xl">
            <input className="form-check-input" type="checkbox"/>
            <label className="form-check-label">Remember me</label>
          </div>
          <a href="#/">Forget Password</a>
        </div>
        <button className="btn btn-lg btn-primary-gradient w-100 mb-5" style={{ transform: 'none' }}>
          Sign In
        </button>
        <hr />
        <div className="d-flex justify-content-center" style={{ gap: 20, marginBottom: '3rem' }}>
          <span>Dont have an account?</span>
          <a href="#/">Sign Up</a>
        </div>
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
