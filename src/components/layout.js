import React from "react"
import { Link } from "gatsby"

const Layout = ({ content }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      {/*TODO: add Navbar here*/}
      <main>{content}</main>
      <footer>© {new Date().getFullYear()} Sunrise Movement Seattle</footer>
    </div>
  )
}

export default Layout
