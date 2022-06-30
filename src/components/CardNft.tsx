import React from 'react'

export default function CardNft() {
  return (
    <div className='bg-black-gradient p-2 text-center' style={{ borderRadius: '2rem' }}>
      {/* <div className='bg-primary mb-3' style={{ height: 300, borderRadius: '2rem' }}></div> */}
      <img src="https://picsum.photos/1366/768" alt="" className='mb-3' style={{ height: 300, width: '100%', borderRadius: '2rem' }} />
      <div className='fw-500 mb-2' style={{ fontSize: '1.5rem' }}>Affine Transformations</div>
      <div className='mb-2'>Nick Schlax</div>
      <div className='d-flex justify-content-center' style={{ gap: 20 }}>
        <div>
          <span className='me-2'>1.00</span>
          <i className="fa fa-coin"></i>
        </div>
        <div>1432 Supply</div>
      </div>
    </div>
  )
}
