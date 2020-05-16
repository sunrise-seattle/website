import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"

import { MobileContext } from "../MobileContext"
import Navbar from "./Navbar"

export default function Header({
  location,
  heading,
  buttons,
  backgroundImage,
}) {
  const isMobile = useContext(MobileContext)
  const styles = StyleSheet.create({
    mobile: {
      textAlign: "center",
      padding: "20px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      wordWrap: "break-word",
    },
    full: {
      padding: "50px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    buttonsMobile: {
      display: "flex",
      justifyContent: "center",
    },
    headerFull: {
      color: "var(--sunrise-yellow)",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "74px",
      lineHeight: "105%",
      letterSpacing: "0.1em",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    headerMobile: {
      color: "var(--sunrise-yellow)",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "48px",
      lineHeight: "105%",
      letterSpacing: "0.1em",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  })

  return (
    <div className={isMobile ? css(styles.mobile) : css(styles.full)}>
      <Navbar location={location} />
      <div
        className={isMobile ? css(styles.headerMobile) : css(styles.headerFull)}
      >
        {heading}
      </div>
      <div className={isMobile ? css(styles.buttonsMobile) : ""}>
        {!!buttons && buttons}
      </div>
    </div>
  )
}
