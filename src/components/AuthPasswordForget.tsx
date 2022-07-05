import React from 'react'

export default function AuthPasswordForget() {
  return (
    <>
      <div className="fw-bold mb-3" style={{ fontSize: '3rem' }}>Password Request</div>
      <div className="mb-3">
        <label htmlFor="" className="label">Username</label>
        <input type="text" className="form-control p-3" placeholder='Enter username' />
      </div>
      <button className="btn btn-primary-gradient w-100" style={{ transform: 'none' }}>
        Request
      </button>
    </>
  )
}
