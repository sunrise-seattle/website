// custom typefaces
import "typeface-source-sans-pro"
import "typeface-source-code-pro"

import "prismjs/themes/prism.css"

// replace hydrate function with straight render to fix https://github.com/gatsbyjs/gatsby/issues/8560. Does affect performance
const ReactDOM = require("react-dom")

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
