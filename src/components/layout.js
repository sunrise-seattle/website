import React from "react"
import "../styles/styles.css"
import Footer from "./Footer"
import yellowLogo from "../../content/assets/yellow-logo.png"

const Layout = ({ content }) => {
  return (
    <div className="layoutContainer">
      <title>Sunrise Movement Seattle</title>
      <image src={yellowLogo} />

      {/*TODO: add Navbar here*/}
      <main>{content}</main>
      <Footer />
    </div>
  )
}

export default Layout
