import React from 'react'

export default function Footer() {
  return (
    <div className='px-5 mb-5 d-flex text-muted' style={{ gap: 20, fontSize: '1.5rem' }}>
      <div>
        <i className="fa fa-envelope me-2"></i>
        <span>venaticinft@gmail.com</span>
      </div>
      <div>
        <i className="far fa-copyright me-2"></i>
        <span>VENATICI.IO 2022</span>
      </div>
    </div>
  )
}
