import React from 'react'
import { Link } from 'react-router-dom'

export default function CollectionsPage() {
  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Generative Collections</div>
        <div className="mb-1" style={{ fontSize: '1.5rem' }}>Create New Collections</div>
        <div className="mb-4">Use layered PNG images to create unique compiled images with rarities and preview images.</div>
        <Link to={'create'}>
          <button className="btn btn-black-gradient px-3">
            <div className="content">New Collections</div>
          </button>
        </Link>
      </div>

      <div>
        <div className='mb-1' style={{ fontSize: '1.5rem' }}>Your Collections</div>
        <div>Here are all the collections you've generated using MonkeLabs, you can use these at mint deployment.</div>
      </div>
    </>
  )
}
