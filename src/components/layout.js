import React, { useState, useEffect } from "react"
import "../styles/styles.css"
import Footer from "./Footer"
import Header from "./Header"
import yellowLogo from "../../content/assets/yellow-logo.png"
import { isNarrowWidth } from "../util"
import { Helmet } from "react-helmet"

export default function Layout({ location, title, heading, content }) {
  const [isNarrowScreen, setNarrowScreen] = useState(isNarrowWidth())

  useEffect(() => {
    const handleResize = () => {
      setNarrowScreen(isNarrowWidth())
    }

    window.addEventListener("resize", handleResize)
  })

  return (
    <div className={isNarrowScreen ? "narrowLayout" : "fullLayout"}>
      <Helmet>
        <link rel="icon" src={yellowLogo} />
        <title>{title}</title>
      </Helmet>

      <Header location={location} heading={heading} />
      <main>{content}</main>
      <Footer />
    </div>
  )
}
