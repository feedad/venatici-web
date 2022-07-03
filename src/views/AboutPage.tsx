import React from 'react'
import Navbar from '../components/Navbar'
import PerfectScrollbar from 'react-perfect-scrollbar';

import IconArtistCuration from '../assets/images/about-artist-curation.svg';
import IconCreative from '../assets/images/about-creative.svg';
import IconDao from '../assets/images/about-dao.svg';
import IconNftStudio from '../assets/images/about-nft-studio.svg';
import CardRoadmap from '../components/CardRoadmap';
import Footer from '../components/Footer';

export default function AboutPage() {
  const roadmapList = [
    { title: 'Artist Curation', icon: IconArtistCuration, desc: 'As a studio, our main focus as a team right now is curating talented artists from all around the world, and help them build their own brand and spread their message' },
    { title: 'Creative & Talent Agency', icon: IconCreative, desc: "We are looking to incubate artists that we collaborate with, and also groom in-house artists that we will manage as talents. This allows the artist to solely focus on the art, and we’ll focus on building them as a brand." },
    { title: 'Dao', icon: IconDao, desc: "We strongly believe that community-led platforms is the best way to always be grounded and responsive to change. Abstract Labs membership holders would get access to a DAO, allowing them to come up with new initiatives to improve the studio." },
    { title: 'NFT Studio', icon: IconNftStudio, desc: "As our platform develops, we are also looking to open an NFT Studio to showcase our artist’s NFT collections. We plan to open it to the public, with the goal of spreading the NFT movement all around the world." },
  ];

  return (
    <>
      <div className='container' style={{ marginBottom: '8rem' }}>
        <div className="position-relative" style={{ zIndex: 100 }}>
          <Navbar/>
        </div>

        {/* about: top */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ width: 640, marginTop: 120 }}>
            <div className='fw-bold mb-4' style={{ fontSize: '3rem' }}>A Revenue Sharing Launchpad on Solana</div>
            <div className='mb-4' style={{ fontSize: '1.2rem' }}>We launch your NFT from concept to deployment, backed by our community of holders who earn 50% of earnings weekly.</div>
          </div>

          {/* bg earth */}
          <img src={require('../assets/images/home-bg.png')} alt="" style={{ position: 'absolute', height: '200vh', right: 0, top: 0 }} />
        </div>

        {/* roadmap */}
        <div>
          <div className="fw-bold mb-4" style={{ fontSize: '2rem' }}>Roadmap</div>
          <div className='d-flex mb-5' style={{ gap: 60 }}>
            <CardRoadmap title={roadmapList[0].title} icon={roadmapList[0].icon} desc={roadmapList[0].desc}/>
            <CardRoadmap title={roadmapList[1].title} icon={roadmapList[1].icon} desc={roadmapList[1].desc} iconBottom={true}/>
          </div>
          <div className='d-flex justify-content-end' style={{ gap: 60 }}>
            <CardRoadmap title={roadmapList[2].title} icon={roadmapList[2].icon} desc={roadmapList[2].desc}/>
            <CardRoadmap title={roadmapList[3].title} icon={roadmapList[3].icon} desc={roadmapList[3].desc} iconBottom={true}/>
          </div>
        </div>
      </div>

      {/* about: collaboration */}
      <div style={{ marginBottom: '5rem' }}>
        <PerfectScrollbar options={{ suppressScrollY: true }} style={{ paddingBottom: '4rem' }}>
          <div className="d-flex align-items-center" style={{ gap: 50 }}>
            <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#0F0F0F', height: 250, width: 350, flexShrink: 0 }}>
              <div className="fw-bold text-uppercase" style={{ fontSize: '2rem' }}>Collaboration</div>
            </div>
            {[0,1,2,3,4,5].map(item => (
              <div key={item}>
                <div className="fw-bold fst-italic" style={{ fontSize: '1.5rem' }}>HandCraft</div>
                <div className='fst-italic'>Collaboration</div>
                <img src="https://picsum.photos/600" alt="" className='rounded-circle' style={{ width: 330, height: 330, marginTop: -20 }} />
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>

      {/* footer */}
      <div className="container">
        <Footer/>
      </div>
    </>
  )
}
