import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"

import LinkedButton from "./LinkedButton"
import { MobileContext } from "../MobileContext"
import Navbar from "./Navbar"

export default function Header({ location, heading, buttons }) {
  const isMobile = useContext(MobileContext)
  return (
    <div className="header">
      <Navbar location={location} />
      <h1 className={isMobile ? css(styles.mobile) : ""}>{heading}</h1>
      {!!buttons &&
        buttons.map(entry => {
          return <LinkedButton link={entry.link} text={entry.text} />
        })}
    </div>
  )
}

const styles = StyleSheet.create({
  mobile: {
    textAlign: "center",
  },
})
