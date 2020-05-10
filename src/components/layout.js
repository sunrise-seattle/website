import "../styles/styles.css"

import React, { useEffect, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import Footer from "./Footer"
import Header from "./Header"
import { Helmet } from "react-helmet"
import { MobileProvider } from "../MobileContext"
import { isMobile } from "../util"
import yellowLogo from "../../content/assets/yellow-logo.png"

export default function Layout({ location, title, heading, content }) {
  const [mobile, setMobile] = useState(isMobile())

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile())
    }

    window.addEventListener("resize", handleResize)
  })

  return (
    <MobileProvider value={mobile}>
      <Helmet>
        <link rel="icon" src={yellowLogo} />
        <title>{title}</title>
      </Helmet>

      <div className={mobile ? css(styles.mobile) : css(styles.full)}>
        <Header location={location} heading={heading} />
        <main>{content}</main>
        <Footer />
      </div>
    </MobileProvider>
  )
}

const styles = StyleSheet.create({
  mobile: {
    padding: "10px",
  },
  full: {
    padding: "50px",
  },
})
