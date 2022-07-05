import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthRegister() {
  return (
    <>
      <div className="fw-bold mb-3" style={{ fontSize: '3rem' }}>Create Account</div>
      <div className="mb-3">
        <label htmlFor="" className="label">Username</label>
        <input type="text" className="form-control py-2 px-3" placeholder='Enter username' />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label">Email</label>
        <input type="text" className="form-control py-2 px-3" placeholder='Enter email' />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label">Password</label>
        <input type="password" className="form-control py-2 px-3" placeholder='Enter password' />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label">Confirm Password</label>
        <input type="password" className="form-control py-2 px-3" placeholder='Enter password' />
      </div>
      <div className='mb-3'>
        <div className='form-check'>
          <input type="checkbox" className="form-check-input" />
          <div className="form-check-label">I aggree with terms and conditions</div>
        </div>
      </div>
      <button className="btn btn-primary-gradient w-100 mb-5" style={{ transform: 'none' }}>
        Sign Up
      </button>
      <hr />
      <div className="d-flex justify-content-center" style={{ gap: 20, marginBottom: '3rem' }}>
        <span>Already have account?</span>
        <Link to={'../login'}>Sign in now</Link>
      </div>
    </>
  )
}
