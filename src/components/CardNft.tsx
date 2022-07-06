import React from 'react'

interface CardNftProps {
  name?: string,
  image?: string,
  live?: boolean
}

export default function CardNft({ name = 'Affine Transformations', image = 'https://picsum.photos/1366/768', live = false }: CardNftProps) {
  return (
    <div className='bg-black-gradient p-2 text-center' style={{ borderRadius: '2rem' }}>
      {/* <div className='bg-primary mb-3' style={{ height: 300, borderRadius: '2rem' }}></div> */}
      <img src={image} alt="" className='mb-3' style={{ height: 300, width: '100%', borderRadius: '2rem', objectFit: 'cover' }} />
      <div className='fw-500 mb-2' style={{ fontSize: '1.5rem' }}>{name}</div>
      <div className='mb-2'>{name}</div>
      {live && (
        <div className="py-1 px-3 bg-dark rounded-pill d-inline-block fw-bold mb-2" style={{ color: '#3CD79F' }}>LIVE</div>
      )}
      {/* <div className='d-flex justify-content-center' style={{ gap: 20 }}>
        <div>
          <span className='me-2'>1.00</span>
          <i className="fa fa-coin"></i>
        </div>
        <div>1432 Supply</div>
      </div> */}
    </div>
  )
}
