import React from 'react'
import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
