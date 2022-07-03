import React from 'react'
import CardNft from '../components/CardNft';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

export default function UpcomingPage() {
  return (
    <div className='container'>
      <Navbar/>

      {/* upcoming: head */}
      <div className='d-flex align-items-center mt-5' style={{ gap: 50, marginBottom: '8rem' }}>
        <div>
          <div className='fw-bold mb-2' style={{ fontSize: '3rem' }}>Affine Transformations</div>
          <div className='d-flex align-items-center mb-4' style={{ gap: 20, color: '#3CD79F' }}>
            <div className='tags tags-lg tags-green-gradient'>
              <div className="content">Confirmed</div>
            </div>
            <i className="far fa-bell fa-2x"></i>
            <div style={{ fontSize: '1.5rem' }}>01 March 2022</div>
            <div>5 p.m.</div>
          </div>
          <div style={{ width: 600 }}>Affine Transformations is an in-depth exploration of the abstract aesthetic beauty that exists within the realm of fractal mathematics. Created by combining iterated function systems with multiple randomly-generated affine transformations, each piece captures a unique and immutable place within the universe of fractal mathematics. The complex, and often organic, nature of the forms that emerge from these fractals are reminiscent of the forms and phenomenon that we see in the natural world - and remind us of the fundamental relationship between beauty, nature, and mathematics.</div>
        </div>
        <div className='text-center' style={{ flexGrow: 1 }}>
          <div className='p-3 d-inline-block mb-4' style={{ border: 'solid 3px #fff3', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}>
            <img src="https://picsum.photos/1366/768" alt="" style={{ width: 400, height: 400, objectFit: 'cover', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', }} />
          </div>
          <div className='d-flex justify-content-center align-items-center' style={{ gap: 20 }}>
            <div>
              <span className='me-2'>1.00</span>
              <i className="fa fa-coin"></i>
            </div>
            <div><i className="fa fa-circle" style={{ fontSize: '0.5rem' }}></i></div>
            <div>1314 Supply</div>
          </div>
        </div>
      </div>

      {/* upcoming: nft list */}
      <div className="row row-cols-xl-3 row-cols-2 g-5 mb-5">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(item => {
            return (
              <div>
                <CardNft/>
              </div>
            );
          })}
      </div>

      {/* footer */}
      <Footer/>
    </div>
  )
}
