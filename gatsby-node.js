exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // create redirects
  createRedirect({
    fromPath: "/bailout",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLSd9pgewT90daFO_8duMxoB4CcnBIm24pwd0wlM2PSf9hXDE2w/viewform?usp=sf_link",
    isPermanent: false,
  })
}
