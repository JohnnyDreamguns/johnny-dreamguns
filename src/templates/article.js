import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout
      location={props.location}
      contentType={post.frontmatter.contentType}
      title={siteTitle}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          display: `block`,
        }}
      >
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticlesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        contentType
      }
    }
  }
`
