import React from "react"
import LinkedButton from "./LinkedButton"
import yellowLogo from "../../content/assets/yellow-logo.png"

export default function Navbar({ location }) {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={yellowLogo} />
      <div className="navbar-items">
        <a
          className={location === "Home" ? "navbar-current" : "navbar-link"}
          href="/"
        >
          Home
        </a>
      </div>
      <div className="navbar-buttons">
        <LinkedButton
          link="https://secure.actblue.com/donate/sunriseseattle"
          text="DONATE TO OUR HUB"
        />
      </div>
    </div>
  )
}
