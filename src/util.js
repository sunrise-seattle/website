export function getScreenWidth() {
  // silly hack for gatsby not having window defined in build time
  if (typeof window !== "undefined") {
    return window.innerWidth > 0 ? window.innerWidth : window.screen.width
  }
  return 0
}

export function isNarrowWidth() {
  return getScreenWidth() < 800
}
