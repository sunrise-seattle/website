import { StyleSheet, css } from "aphrodite"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LinkedButton from "./LinkedButton"
import React from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div className={css(styles.footer)}>
      <div className={css(styles.footerButtons)}>
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
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "0.5px solid white",
    marginTop: "20px",
  },
  footerSocial: {
    display: "flex",
    alignContent: "flex-end",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "10px",
    flexWrap: "wrap",
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
  footerButtons: {
    display: "flex",
    alignContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  footerButton: {
    marginTop: "15px",
    marginLeft: "15px",
  },
})
