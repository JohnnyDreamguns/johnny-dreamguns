import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import H2 from "../components/h2"
import SEO from "../components/seo"

const Songs = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  console.log(posts)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />

      <H2>SONGS</H2>

      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                {node.frontmatter.description.length > 0 ? (
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                ) : (
                  <span>{title}</span>
                )}
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Songs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentType: { eq: "song" } } }
    ) {
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
  }
`
