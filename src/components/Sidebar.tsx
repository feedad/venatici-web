import React from 'react'
import iconDashboard from 'assets/images/sidebar/icon-dashboard.svg';
import iconMyMints from 'assets/images/sidebar/icon-my-mints.svg';
import iconWallet from 'assets/images/sidebar/icon-wallets.svg';
import iconCollections from 'assets/images/sidebar/icon-collections.svg';
import iconSettings from 'assets/images/sidebar/icon-settings.svg';
import iconLogout from 'assets/images/sidebar/icon-logout.svg';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ flexShrink: 0 }}>
      <div className="account">
        <img src="https://avatars.dicebear.com/api/adventurer-neutral/venatici.svg" alt="" className='profile-picture' />
        <div className="name">Venatici</div>
      </div>
      <Link to={'/dashboard'}>
        <div className="item active">
          <img src={iconDashboard} alt="" className="icon" />
          <div className="label">Dashboard</div>
        </div>
      </Link>
      <Link to={'/dashboard/my-mints'}>
        <div className="item">
          <img src={iconMyMints} alt="" className="icon" />
          <div className="label">My Mints</div>
        </div>
      </Link>
      <div className="item">
        <img src={iconWallet} alt="" className="icon" />
        <div className="label">Wallet</div>
      </div>
      <Link to={'/dashboard/collections'}>
        <div className="item">
          <img src={iconCollections} alt="" className="icon" />
          <div className="label">Collections</div>
        </div>
      </Link>
      <div className="item">
        <img src={iconSettings} alt="" className="icon" />
        <div className="label">Settings</div>
      </div>
      <div className="item" style={{ marginTop: 50 }}>
        <img src={iconLogout} alt="" className="icon" />
        <div className="label">Sign Out</div>
      </div>
    </div>
  )
}
