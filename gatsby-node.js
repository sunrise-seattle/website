exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // create redirects
  createRedirect({
    fromPath: "/bailout",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLSd9pgewT90daFO_8duMxoB4CcnBIm24pwd0wlM2PSf9hXDE2w/viewform?usp=sf_link",
    isPermanent: false,
  })
  createRedirect({
    fromPath: "/peoples-alignment",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLSdbKDv0IB_Hg7nbuItELCewk3D3d9wBS9MDTsk2FwhZPL2u3w/viewform",
    isPermanent: false,
  })
}
