import React, { useState, useEffect } from "react"
import "../styles/styles.css"
import Footer from "./Footer"
import yellowLogo from "../../content/assets/yellow-logo.png"
import { isNarrowWidth } from "../util"
import { Helmet } from "react-helmet"

export default function Layout({ content }) {
  const [isNarrowScreen, setNarrowScreen] = useState(true)

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
        <title>Sunrise Movement Seattle</title>
      </Helmet>

      {/*TODO: add Navbar here*/}
      <main>{content}</main>
      <Footer />
    </div>
  )
}
