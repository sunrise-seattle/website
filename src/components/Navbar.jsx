import { StyleSheet, css } from "aphrodite"

import LinkedButton from "./LinkedButton"
import React from "react"
import yellowLogo from "../../content/assets/yellow-logo.png"

export default function Navbar({ location }) {
  return (
    <div className={css(styles.navbar)}>
      <img
        className={css(styles.navbarLogo)}
        src={yellowLogo}
        alt="Sunrise Seattle Logo"
      />
      <div className={css(styles.navbarItems)}>
        <a
          className={
            location === "Home"
              ? css(styles.navbarCurrent)
              : css(styles.navbarLink)
          }
          href="/"
        >
          Home
        </a>
      </div>
      <div className={css(styles.navbarButtons)}>
        <LinkedButton
          link="https://secure.actblue.com/donate/sunriseseattle"
          text="DONATE TO OUR HUB"
        />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  navbar: { display: "flex" },
  navbarLogo: {
    flex: "1",
    maxWidth: "82px",
    width: "82px",
    height: "123px",
    maxHeight: "123px",
  },
  navbarItems: {
    display: "flex",
    flex: "3",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarLink: {
    textDecoration: "none",
    color: "white",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
  },
  navbarCurrent: {
    color: "var(--sunrise-yellow)",
    textDecoration: "underline",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
  },
  navbarButtons: { flex: "1" },
})
