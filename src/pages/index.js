import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from "../components/h2"
import H3 from "../components/h3"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Index = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="News" />

      <H2>NEWS</H2>

      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <H3>
                {node.frontmatter.date} - {title}
              </H3>

              <MDXRenderer>{node.body}</MDXRenderer>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentType: { eq: "news" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          body
          frontmatter {
            date(formatString: "DD/MM/YY")
            title
            contentType
          }
        }
      }
    }
  }
`
