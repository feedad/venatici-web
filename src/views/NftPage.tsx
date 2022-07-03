import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NftPage() {
  return (
    <div className="container">
      <Navbar/>

      <div className="d-flex" style={{ gap: 80, marginBottom: '8rem' }}>
        <div className='text-center' style={{ flexGrow: 1 }}>
          <img src="https://picsum.photos/1366/768" alt="" style={{ height: 480, width: 480, objectFit: 'cover' }} />
        </div>
        <div>
          <div className="fw-bold" style={{ fontSize: '3.5rem' }}>Affine Transformations</div>
          <div className='mb-3' style={{ fontSize: '2rem', fontStyle: 'italic' }}>by Nick Schlax</div>
          <div style={{ width: 600 }}>Affine Transformations is an in-depth exploration of the abstract aesthetic beauty that exists within the realm of fractal mathematics. Created by combining iterated function systems with multiple randomly-generated affine transformations, each piece captures a unique and immutable place within the universe of fractalmathematics. The complex, and often organic, nature of the forms that emerge from these fractals are reminiscent of the forms and phenomenon that we see in the natural world - and remind us of the fundamental relationship between beauty, nature, and mathematics.</div>
        </div>
      </div>

      <div className="d-flex" style={{ gap: 80, marginBottom: '8rem' }}>
        <div>
          <div className="fw-bold" style={{ fontSize: '3.5rem' }}>Nick Schlax</div>
          <div style={{ width: 600 }}>Nick Schlax is a multi-disciplinary artist with a background in landscape photography, design, and algorithmic art. His fascination with fractal mathematics began over 15 years ago, when he was captured by the reality that there exists this entire parallel world of abstract beauty just waiting to be explored. He first began exploring this particular algorithm over 10 years ago and has generated and reviewed hundreds of thousands of outputs to select the most compelling and fascinating. Each piece within this collection represents a moment of discovery from that process of extensive exploration – a gallery of landscape photographs from the parallel world of abstract mathematics.</div>
        </div>
        <div className='text-center' style={{ flexGrow: 1 }}>
          <img src="https://avatars.dicebear.com/api/personas/schlax.svg?background=%23333344" alt="" style={{ height: 480, width: 480, objectFit: 'cover' }} />
        </div>
      </div>

      <div className='d-flex mb-5' style={{ gap: 10 }}>
        {[0,1,2,3].map(i => (
          <img src="https://picsum.photos/1366/768" alt="" style={{ width: 340, height: 340 }} />
        ))}
      </div>

      <Footer/>
    </div>
  )
}
