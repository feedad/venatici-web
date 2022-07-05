import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'

export default function MintPage() {
  const [activeTabs, setActiveTabs] = useState('roadmap');

  return (
    <div className="container">
      <Navbar/>

      <div className="d-flex mb-4" style={{ gap: 20 }}>
        <div className='text-center' style={{ flexGrow: 1 }}>
          <img src="https://picsum.photos/1366/1366" alt="" className='rounded mb-4 d-block mx-auto' style={{ width: 460, height: 460, objectFit: 'cover' }} />
          <div className='text-center mx-auto' style={{ width: 430 }}>
            <ProgressBar value={80}/>
            <div className='fw-bold mt-3' style={{ fontSize: 20 }}>80 / 100</div>
            <div className="fw-bold mt-2" style={{ fontSize: 16 }}>
              Total Items 100 | Price 3.00 <i className="fa fa-coin"></i>
            </div>
            <div className='mt-4'>
              <button className="btn btn-white px-4 rounded-pill fw-bold" style={{ transform: 'none' }}>View Collection</button>
            </div>
          </div>
        </div>
        <div>
          <div className='fw-bold' style={{ fontSize: 42 }}>Affine Transformations</div>
          <div style={{ fontSize: 32 }}>by Nick Schlax</div>
          <div className='d-flex mb-3 mt-3' style={{ gap: 30, fontSize: 28 }}>
            <i className="far fa-globe"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <div className='mb-4' style={{ width: 600 }}>Affine Transformations is an in-depth exploration of the abstract aesthetic beauty that exists within the realm of fractal mathematics. Created by combining iterated function systems..</div>
          <div className='mb-4'>
            <button className="btn btn-primary-gradient px-5 rounded-pill border-white fw-bold" style={{ transform: 'none', borderWidth: 4 }}>
              Mint
            </button>
          </div>
          <div className='d-flex' style={{ gap: 25 }}>
            <div className='d-flex align-items-center justify-content-center' style={{ borderTopLeftRadius: '.5rem', borderTopRightRadius: '.5rem', borderBottomRightRadius: '.5rem', borderBottomLeftRadius: '2rem', backgroundColor: '#575757', height: 100, width: 150 }}>
              <div className='text-center'>
                <div className="fw-bold">Whitelist Ends in</div>
                <div>ENDED</div>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center bg-primary-gradient' style={{ borderTopLeftRadius: '.5rem', borderTopRightRadius: '.5rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '.5rem', height: 100, width: 150 }}>
              <div className='text-center'>
                <div className="fw-bold">Public Ends in</div>
                <div className='d-flex' style={{ gap: 10 }}>
                  <div>
                    <div>20</div>
                    <div style={{ fontSize: 10 }}>Hour</div>
                  </div>
                  <div>:</div>
                  <div>
                    <div>18</div>
                    <div style={{ fontSize: 10 }}>Mins</div>
                  </div>
                  <div>:</div>
                  <div>
                    <div>15</div>
                    <div style={{ fontSize: 10 }}>Secs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row row-cols-2 g-5'>
        <div>
          <div className="fw-bold" style={{ fontSize: 48 }}>About</div>
          <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div>
          <div className='mint-tabs mb-3'>
            <div className={'item' + (activeTabs==='roadmap' ? ' active' : '')} onClick={() => setActiveTabs('roadmap')}>Roadmap</div>
            <div className={'item' + (activeTabs==='team' ? ' active' : '')} onClick={() => setActiveTabs('team')}>Team</div>
          </div>

          {activeTabs==='roadmap' && (
            <div>
              {[0,1,2,3].map(i => (
                <div className='mb-3'>
                  <div className='fw-bold mb-1'>Step {i+1}:</div>
                  <div>Elit proident aliquip proident et quis eu velit aliqua sint. Qui culpa et aliqua cupidatat aute ut. Labore ullamco amet proident in. Cupidatat tempor ad sit commodo. Esse enim duis adipisicing sunt dolor mollit voluptate ut.</div>
                </div>
              ))}
            </div>
          )}

          {activeTabs==='team' && (
            <div>
              {[0,1,2,3].map(i => (
                <div className='mb-3'>
                  <div className="fw-bold">Adam Mason</div>
                  <div className='mb-2'>CEO</div>
                  <div>Exercitation pariatur enim anim esse ipsum labore exercitation consectetur amet magna. In dolor laborum eu exercitation. Id ut exercitation in amet id ex. Proident est consequat officia ullamco ut proident laboris.</div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
