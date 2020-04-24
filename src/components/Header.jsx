import React from "react"
import LinkedButton from "./LinkedButton"
import Navbar from "./Navbar"

export default function Header({ location, heading, buttons }) {
  return (
    <div className="header">
      <Navbar location={location} />
      <h1>{heading}</h1>
      {!!buttons &&
        buttons.map(entry => {
          return <LinkedButton link={entry.link} text={entry.text} />
        })}
    </div>
  )
}
