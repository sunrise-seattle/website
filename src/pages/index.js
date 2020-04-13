import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import yellowLogo from "../../content/assets/yellow-logo.png"

const home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const content = (
    <div className="body">
      <h1>{siteTitle}</h1>
      <p>
        Website coming soon! In the meantime, join us using{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfc06mx_j5Adhc5xDdWZjZI7turnaZOH7Q6sndllJKq4i678w/viewform">
          this form
        </a>
        !
      </p>
      <image src={yellowLogo} />
      <img src={yellowLogo} alt="" className="big-home-image" />
    </div>
  )
  return (
    <Layout
      location={location}
      title={"Sunrise Movement Seattle"}
      content={content}
    >
      <SEO title="Home" />
    </Layout>
  )
}

export default home

//TODO: Just leave this blog support here for now for the future?
/* const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex*/

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/* TODO: can add this to query above under site
allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
*/