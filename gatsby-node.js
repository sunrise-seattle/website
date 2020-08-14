exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // create redirects
  createRedirect({
    fromPath: "/blacklives",
    toPath:
      "https://docs.google.com/document/d/1si7VhtmmXTD9aVONniEIVP5Doa3DRQvGfcx5CfMlaSA",
    isPermanent: false,
  })
  createRedirect({
    fromPath: "/mutualaid",
    toPath:
      "https://docs.google.com/document/d/1psyAYkZuipqr2Nh2RfafCTeLFVnaUdNB3w_G9NH7Goc",
    isPermanent: false,
  })
}
