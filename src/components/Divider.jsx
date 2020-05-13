import { StyleSheet, css } from "aphrodite"

import React from "react"

const styles = StyleSheet.create({
  divider: {
    borderTop: "0.5px solid white",
    marginTop: "30px",
    marginBottom: "30px",
  },
  verticalDivider: {
    borderRight: "0.5px solid white",
    marginRight: "30px",
    marginLeft: "30px",
  },
})

export default function Divider() {
  return <div className={css(styles.divider)} />
}

export const VerticalDivider = () => {
  return <div className={css(styles.verticalDivider)} />
}
