import React from "react"
import "../styles/styles.css"
import Footer from "./Footer"

const Layout = ({ content }) => {
  return (
    <div className="layoutContainer">
      {/*TODO: add Navbar here*/}
      <main>{content}</main>
      <Footer />
    </div>
  )
}

export default Layout
