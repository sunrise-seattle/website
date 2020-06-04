exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // create redirects
  createRedirect({
    fromPath: "/blacklives",
    toPath:
      "https://docs.google.com/document/d/1si7VhtmmXTD9aVONniEIVP5Doa3DRQvGfcx5CfMlaSA",
    isPermanent: false,
  })
}
