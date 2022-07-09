import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthPasswordForget() {
  return (
    <div className='mb-5'>
      <div className="fw-bold mb-3" style={{ fontSize: '3rem' }}>Password Request</div>
      <div className="mb-3">
        <label htmlFor="" className="label">Username</label>
        <input type="text" className="form-control p-3" placeholder='Enter username' />
      </div>
      <button className="btn btn-primary-gradient w-100 mb-3" style={{ transform: 'none' }}>
        Request
      </button>
      <hr className='mb-3' />
      <div className="d-flex justify-content-center" style={{ gap: 10 }}>
        <span>Remember your password?</span>
        <Link to={'/auth/login'}>Sign in now</Link>
      </div>
    </div>
  )
}
