import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function LayoutDashboard() {
  return (
    <div className="container">
      <Navbar/>

      <div className="d-flex mb-5" style={{ gap: 20 }}>
        <div style={{ flexShrink: 0 }}>
          <Sidebar/>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div className="text-end mb-3">
            <i className="fa fa-bell"></i>
          </div>
          <Outlet/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
