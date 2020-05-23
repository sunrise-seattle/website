import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LinkedButton from "./LinkedButton"
import { MobileContext } from "../MobileContext"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  const isMobile = useContext(MobileContext)

  return (
    <div className={isMobile ? css(styles.mobile) : css(styles.full)}>
      <div
        className={isMobile ? css(styles.mobileButtons) : css(styles.buttons)}
      >
        <LinkedButton
          className={css(styles.footerButton)}
          link="https://secure.actblue.com/donate/sunriseseattle"
          text="DONATE TO OUR HUB"
        />
        <LinkedButton
          className={css(styles.footerButton)}
          link="https://docs.google.com/forms/d/e/1FAIpQLSfc06mx_j5Adhc5xDdWZjZI7turnaZOH7Q6sndllJKq4i678w/viewform"
          text="JOIN OUR EMAIL LIST"
        />
      </div>
      <div className={css(styles.footerSocial)}>
        <a
          className={css(styles.footerSocialButton)}
          href="mailto:sunrisemovementseattle@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          className={css(styles.footerSocialButton)}
          href="https://www.facebook.com/sunriseseattle/"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          className={css(styles.footerSocialButton)}
          href="https://www.instagram.com/sunrisemvmt_seattle/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className={css(styles.footerSocialButton)}
          href="https://twitter.com/Sunrisemvmt_sea"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  full: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "0.5px solid white",
    marginTop: "20px",
  },
  mobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderTop: "0.5px solid white",
    marginTop: "20px",
  },
  footerSocial: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  footerSocialButton: {
    height: "30px",
    width: "30px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "var(--sunrise-dark)",
    textAlign: "center",
    margin: "10px",
    padding: "10px",
    fontSize: "2em",
  },
  buttons: {
    display: "flex",
    alignContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mobileButtons: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  footerButton: {
    marginTop: "15px",
    marginLeft: "15px",
  },
})
