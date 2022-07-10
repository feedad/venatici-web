import React, { useState } from 'react'

export default function MyMintsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Solana Mints</div>
        <div className='mb-1' style={{ fontSize: '1.5rem' }}>Request New Mint</div>
        <div className='mb-4'>To deploy your custom mint page, please fill in the form below.</div>
        <button className="btn btn-black-gradient px-3" onClick={() => setShowForm(!showForm)}>
          <div className="content">Show Form</div>
        </button>
      </div>

      {showForm && (
        <div style={{ marginBottom: 50 }}>
          <div className="row row-cols-2 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className='label'>NFT Name</div>
                <div className='sublabel'>What is the collection name</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='Signal Boost' />
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Project Symbol</div>
                <div className='sublabel'>Similiar to stock ticker</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='SB' />
            </div>
          </div>
          <div className="row row-cols-2 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Project Supply</div>
                <div className='sublabel'>How many NFT will be created</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='1111' />
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Royalty Percentage</div>
                <div className='sublabel'>This is for secondary sales</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='5' />
            </div>
          </div>
          <div className="mb-4">
              <div className="label-with-sublabel">
                <div className='label'>NFT Description</div>
                <div className='sublabel'>This description for your NFT will appear in the owners wallets.</div>
              </div>
              <textarea className='form-control form-control-grey' rows={4} placeholder='1111SIgnal Boost are spreading on Solana.'></textarea>
          </div>
        </div>
      )}

      <div>
        <div className='mb-1' style={{ fontSize: '1.5rem' }}>Your mint deployment requests</div>
        <div>You may keep track of all your solana mint deployment requests here, if accepeted you will have option to go to Mint Dashboard.</div>
      </div>
    </>
  )
}
