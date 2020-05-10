import { StyleSheet, css } from "aphrodite"

import React from "react"

export default function Divider() {
  return <div className={css(styles.divider)} />
}

const styles = StyleSheet.create({
  divider: {
    borderTop: "0.5px solid white",
    marginTop: "30px",
    marginBottom: "30px",
  },
})
