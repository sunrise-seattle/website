export function getScreenWidth() {
  return window.innerWidth > 0 ? window.innerWidth : window.screen.width
}

export function isNarrowWidth() {
  return getScreenWidth() < 600
}
