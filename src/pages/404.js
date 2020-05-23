import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const content = (
    <>
      <h1>Not Found</h1>
      <p>
        The page you were looking for was not found. This site is still under
        construction, so it could be that the page hasn't been created yet, or
        it could have been moved.
      </p>
      <a href="/">Return home</a>
    </>
  )

  return (
    <Layout location={location} title={siteTitle} content={content}>
      <SEO title="404: Not Found" />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
