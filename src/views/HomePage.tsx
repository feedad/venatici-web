import React from 'react'
import HomeVenacity from '../assets/images/home-venacity.svg';
import CardNft from '../components/CardNft';
import Navbar from '../components/Navbar';

import IconBotFree from '../assets/images/home-bot-free.svg';
import IconImageGeneration from '../assets/images/home-image-generation.svg';
import IconCustomContracts from '../assets/images/home-custom-contracts.svg';
import IconWhitelist from '../assets/images/home-whitelist.svg';
import IconCooldown from '../assets/images/home-cooldown.svg';
import IconMintPage from '../assets/images/home-mint-page.svg';
import IconShortNotice from '../assets/images/home-short-notice.svg';
import IconSupport from '../assets/images/home-support.svg';
import Footer from '../components/Footer';

export default function HomePage() {
  const featuresList = [
    { name: 'Bot-Free', desc: '100% bot-free. Our custom contract is changed regularly so the bots never learn.', icon: IconBotFree },
    { name: 'Image Generation', desc: 'Bring your own assets, or use our collection builder to preview your work instantly.', icon: IconImageGeneration },
    { name: 'Custom Contracts', desc: 'By using custom contracts, we tailor your mint to meet the needs of your roadmap or utility.', icon: IconCustomContracts },
    { name: 'Whitelist', desc: 'We support the use of SPL Tokens or custom on-chain whitelist.', icon: IconWhitelist },
    { name: 'Cooldown', desc: 'Custom cooldown feature to maximize number of unique holders during mint.', icon: IconCooldown },
    { name: 'Mint Page', desc: 'Create your mint page however it suites your project\'s brand identity.', icon: IconMintPage },
    { name: 'Short-Notice', desc: 'We\'re always around! We can deploy a mint in less than 4 hours if need be.', icon: IconShortNotice },
    { name: 'Support 24/7', desc: 'We are always online on Discord and are always live with you during minting.', icon: IconSupport },
  ];

  const manageYourMintList = [
    'See revenues from mint in real-time.',
    'Manage mint page image and text in real-time.',
    'Download hashlists and necessary secondary data.',
    'Track your progress with interactive charts.',
    '"Powered By Venatici" seal of authenticity.'
  ];

  return (
    <div>

      {/* home: top */}
      <div className='px-5' style={{ position: 'relative', marginBottom: 800 }}>

        {/* bg earth */}
        <img src={require('../assets/images/home-bg.png')} alt="" style={{ position: 'absolute', height: '200vh', right: 0 }} />

        {/* about us */}
        <div style={{ position: 'absolute', left: 0, top: 520, width: 1600 }}>
          <img src={require('../assets/images/home-about-bg.png')} className="w-100" alt="" style={{  }} />
          <div style={{ width: 600, marginLeft: 60, marginTop: -800 }}>
            <button className="btn btn-black-gradient mb-4 px-4">
              <div className="content">Find out more</div>
            </button>
            <div>Our Launchpad's revenue is shared amongst Venatici NFT holders. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
        </div>

        {/* venacity logo */}
        <img src={HomeVenacity} alt="" style={{ position: 'absolute', right: 200, top: 400 }} />

        <Navbar/>
        <section>
          <div style={{ width: 640, marginTop: 120 }}>
            <div className='fw-bold mb-4' style={{ fontSize: '3rem' }}>A Revenue Sharing Launchpad on Solana</div>
            <div className='mb-4' style={{ fontSize: '1.2rem' }}>We launch your NFT from concept to deployment, backed by our community of holders who earn 50% of earnings weekly.</div>
            <button className="btn btn-black-gradient px-4">
              <div className="content">Launch with us</div>
            </button>
          </div>
        </section>
      </div>

      {/* home: minting now */}
      <div className="px-5" style={{ marginBottom: 200 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Minting Now</div>
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-2 g-5">
          {[0, 1, 2, 3, 4, 5].map(item => {
            return (
              <div>
                <CardNft/>
              </div>
            );
          })}
        </div>
      </div>

      {/* home: popular launches */}
      <div className="px-5" style={{ marginBottom: 200 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Popular Launches</div>
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-2 g-5">
          {[0, 1, 2, 3, 4, 5].map(item => {
            return (
              <div>
                <CardNft/>
              </div>
            );
          })}
          </div>
      </div>

      {/* home: popular launches (2) */}
      <div className="px-5 mb-5">
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Popular Launches</div>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 gx-5 gy-2">
          {featuresList.map(feature => (
            <div className='text-center p-5'>
              <img src={feature.icon} alt="" className='mb-2' />
              <div className='fw-bold mb-3' style={{ color: '#3CD79F', fontSize: '1.5rem' }}>{feature.name}</div>
              <div>{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* home: bottom */}
      <div className='px-5 mb-5 d-flex align-items-top' style={{ gap: 10 }}>
        <div style={{ flexGrow: 1 }}>
          <div className='text-center fw-bold mb-5' style={{ fontSize: '3rem' }}>Manage Your Mint</div>
          <div className='text-start mx-auto' style={{ width: 440 }}>
            {manageYourMintList.map(text => (
              <div className='mb-3 fw-bold'>
                <i className="fa fa-check-circle me-3" style={{ color: '#3CD79F', fontSize: '1.2rem' }}></i>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={require('../assets/images/home-bottom-separator.png')} alt="" style={{ height: 450, marginTop: -40 }} />
        <div className='position-relative' style={{ flexGrow: 1 }}>
          <img src={require('../assets/images/home-community-bg.png')} alt="" style={{ position: 'absolute', right: 150, top: 0, height: 350 }} />
          <div className='text-center fw-bold mb-5 position-relative' style={{ fontSize: '3rem' }}>Join Our Community</div>
          <div className='d-flex justify-content-between mx-auto position-relative' style={{ width: 400 }}>
            <i className="fab fa-discord fa-3x"></i>
            <i className="fab fa-twitter fa-3x"></i>
            <i className="fab fa-instagram fa-3x"></i>
          </div>
        </div>
      </div>

      {/* home: footer */}
      <Footer/>
    </div>
  )
}
