import React from "react"
import LinkedButton from "./LinkedButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <LinkedButton
          link="https://secure.actblue.com/donate/sunriseseattle"
          text="DONATE TO OUR HUB"
        />
        <LinkedButton
          link="https://docs.google.com/forms/d/e/1FAIpQLSfc06mx_j5Adhc5xDdWZjZI7turnaZOH7Q6sndllJKq4i678w/viewform"
          text="JOIN OUR EMAIL LIST"
        />
      </div>
      <div className="footer-social">
        <a
          className="footer-social-button"
          href="mailto:sunrisemovementseattle@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          className="footer-social-button"
          href="https://www.facebook.com/sunriseseattle/"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          className="footer-social-button"
          href="https://www.instagram.com/sunrisemvmt_seattle/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="footer-social-button"
          href="https://twitter.com/Sunrisemvmt_sea"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  )
}
