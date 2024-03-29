import React from 'react'
import logoVenatici from '../assets/images/logo-venatici.svg';
import navHome from '../assets/images/nav-home.svg';
import navUpcoming from '../assets/images/nav-upcoming.svg';
import navPast from '../assets/images/nav-past.svg';
import navNft from '../assets/images/nav-nft.svg';
import navRug from '../assets/images/nav-rug.svg';
import navAbout from '../assets/images/nav-about.svg';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

export default function Navbar() {
  const menuList = [
    { name: 'Home', icon: navHome, url: '/' },
    // { name: 'Upcoming', icon: navUpcoming, url: '/upcoming' },
    // { name: 'Past', icon: navPast, url: '/past' },
    // { name: 'Venatici NFT', icon: navNft, url: '/nft', children: [
    //   { name: 'Affine Transformations', desc: 'by Nick Schlax', url: '' },
    //   { name: 'Signal Boost', desc: 'by Jack Dupp', url: '' },
    // ] },
    { name: 'Mint', icon: navRug, url: '/mint', children: [
      { name: 'Solana', desc: 'Solana Mint', url: 'solana' },
      { name: 'Eth', desc: 'Ethereum Mint', url: 'eth' }
    ] },
    { name: 'About', icon: navAbout, url: '/about' },
  ];

  return (
    <div className='d-flex align-items-center' style={{ gap: 20 }}>
      <img src={logoVenatici} alt="" style={{ width: 200, height: 200 }} />
      <div className='d-flex align-items-center justify-content-end' style={{ backgroundColor: '#0A0A0A', gap: 35, padding: '10px 30px', flexGrow: 1, boxShadow: 'inset 0 -10px 10px -10px #fff', borderRadius: 10 }}>
        {menuList.map(menu => {
          if (!menu.children) return (
            <Link to={menu.url} key={menu.url} style={{ textDecoration: 'none', color: 'white' }}>
              <div style={{ whiteSpace: 'nowrap' }}>
                <img src={menu.icon} alt="" style={{ width: 27, height: 27 }} />
                <span className='fw-bold'>{menu.name}</span>
              </div>
            </Link>
          )

          else return (
            <Dropdown key={menu.url}>
              <Dropdown.Toggle as={dropdownMenuItem}>
                <div style={{ whiteSpace: 'nowrap' }}>
                  <img src={menu.icon} alt="" style={{ width: 27, height: 27 }} />
                  <span className='fw-bold'>{menu.name}</span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {menu.children.map(child => (
                  <Dropdown.Item key={child.name}>
                    <Link to={menu.url + '/' + child.url} key={child.url} style={{ textDecoration: 'none', color: 'black' }}>
                      <div className='fw-bold'>{child.name}</div>
                      <div style={{ fontSize: 12 }}>{child.desc}</div>
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )
        })}
        <div className='text-end'>
          <Link to={'/auth'}>
            <button className='btn btn-primary-gradient px-5 text-uppercase'>
              <div className="content">Dashboard</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface DropdownMenuItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
  onClick: Function
}

const dropdownMenuItem = React.forwardRef(({ children, onClick }: DropdownMenuItemProps, ref: React.Ref<HTMLAnchorElement>) => (
  <a href="#/" 
    ref={ref}
    style={{ textDecoration: 'none', color: 'white' }}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));