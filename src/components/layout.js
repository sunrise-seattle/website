import "../styles/styles.css"

import { Helmet, HelmetProvider } from "react-helmet-async"
import React, { useEffect, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import Footer from "./Footer"
import Header from "./Header"
import { MobileProvider } from "../MobileContext"
import { isMobile } from "../util"
import yellowLogo from "../../content/assets/yellow-logo.png"

const styles = StyleSheet.create({
  mobile: {
    padding: "10px",
  },
  full: {
    padding: "50px",
  },
  body: {
    backgroundColor: "var(--sunrise-dark)",
  },
})

export default function Layout({
  location,
  title,
  heading,
  headerButtons,
  content,
  headerImage,
}) {
  const [mobile, setMobile] = useState(isMobile())

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile())
    }

    window.addEventListener("resize", handleResize)
  })

  return (
    <HelmetProvider>
      <MobileProvider value={mobile}>
        <Helmet>
          <link rel="icon" src={yellowLogo} />
          <title>{title}</title>
        </Helmet>

        <div className={css(styles.body)}>
          <Header
            location={location}
            heading={heading}
            buttons={headerButtons}
            backgroundImage={headerImage}
          />
          <div className={mobile ? css(styles.mobile) : css(styles.full)}>
            <main>{content}</main>
            <Footer />
          </div>
        </div>
      </MobileProvider>
    </HelmetProvider>
  )
}
