import React from "react"
import "../styles/styles.css"

const Layout = ({ content }) => {
  return (
    <div className="layoutContainer">
      {/*TODO: add Navbar here*/}
      <main>{content}</main>
      <footer>© {new Date().getFullYear()} Sunrise Movement Seattle</footer>
    </div>
  )
}

export default Layout
