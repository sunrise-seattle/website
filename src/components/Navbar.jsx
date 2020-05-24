import React, { useContext, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LinkedButton from "./LinkedButton"
import { MobileContext } from "../MobileContext"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import yellowLogo from "../../content/assets/yellow-logo.png"

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Our Teams",
    path: "/404",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Resources",
    path: "/404",
  },
]

export default function Navbar({ location }) {
  const isMobile = useContext(MobileContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const branding = (
    <a href="/">
      <img
        className={css(styles.navbarLogo)}
        src={yellowLogo}
        alt="Sunrise Seattle Logo"
      />
    </a>
  )

  const links = (
    <div
      className={
        isMobile ? css(styles.navbarItemsMobile) : css(styles.navbarItems)
      }
    >
      {pages.map(page => (
        <a
          className={
            location === page.name
              ? css(styles.navbarCurrent)
              : css(styles.navbarLink)
          }
          href={page.path}
          key={`navbar-${page.name}`}
        >
          {page.name}
        </a>
      ))}
    </div>
  )

  const fullView = (
    <div className={css(styles.full)}>
      {branding}
      {links}
      <div className={css(styles.button)}>
        <LinkedButton
          link="https://secure.actblue.com/donate/sunriseseattle"
          text="DONATE TO OUR HUB"
        />
      </div>
    </div>
  )

  const mobileView = (
    <div className={css(styles.mobile)}>
      <div className={css(styles.full)}>
        {branding}
        <div
          className={css(styles.menuIcon)}
          color="white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {menuOpen && links}
    </div>
  )

  return isMobile ? mobileView : fullView
}

const styles = StyleSheet.create({
  full: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mobile: { display: "flex", flexDirection: "column" },
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
  navbarItemsMobile: {
    display: "flex",
    flexDirection: "column",
    flex: "3",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    color: "var(--sunrise-yellow)",
    fontSize: "36px",
    padding: "20px",
    cursor: "pointer",
  },
  navbarLink: {
    textDecoration: "none",
    color: "white",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    margin: "15px",
  },
  navbarCurrent: {
    color: "var(--sunrise-yellow)",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    margin: "15px",
    borderBottom: "2px solid var(--sunrise-yellow)",
  },
  button: { flex: "1", marginTop: "30px" },
})
