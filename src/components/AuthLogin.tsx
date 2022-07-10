import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLogin() {
  return (
    <>
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
      <Link to={'/dashboard'}>
        <button className="btn btn-lg btn-primary-gradient w-100 mb-5" style={{ transform: 'none' }}>
          Sign In
        </button>
      </Link>
      <hr />
      <div className="d-flex justify-content-center" style={{ gap: 20, marginBottom: '3rem' }}>
        <span>Dont have an account?</span>
        <Link to={'../register'}>Sign Up</Link>
      </div>
    </>
  )
}
