import React from 'react'
import CardNft from 'components/CardNft';

export default function DashboardPage() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="fw-bold" style={{ fontSize: '1.5rem' }}>Your NFTs</div>
        <button className="btn btn-grey" style={{ transform: 'none' }}>
          <i className="fa fa-sort-alt" style={{ transform: 'none' }}></i>
        </button>
      </div>
      <div className="row row-cols-3 g-3">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div>
            <CardNft/>
          </div>
        ))}
      </div>
    </>
  )
}
