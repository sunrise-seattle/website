import { StyleSheet, css } from "aphrodite"

import LinkedButton from "./LinkedButton"
import React from "react"
import yellowLogo from "../../content/assets/yellow-logo.png"

const pages = [
  {
    name: "Contact",
    path: "/contact",
  },
]

export default function Navbar({ location }) {
  return (
    <div className={css(styles.navbar)}>
      <a href="/">
        <img
          className={css(styles.navbarLogo)}
          src={yellowLogo}
          alt="Sunrise Seattle Logo"
        />
      </a>
      <div className={css(styles.navbarItems)}>
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
    marginLeft: "20px",
    marginRight: "20px",
  },
  navbarCurrent: {
    color: "var(--sunrise-yellow)",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    marginLeft: "20px",
    marginRight: "20px",
    borderBottom: "2px solid var(--sunrise-yellow)",
  },
  navbarButtons: { flex: "1" },
})
