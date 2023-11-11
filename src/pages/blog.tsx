import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const BlogPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const nodes = data.allContentfulBlogPost.nodes
  return (
    <>
      {nodes.map((node: any) => (
        <React.Fragment key={node.id}>
          <h1>{node.title}</h1>
          {renderRichText(node.text)}
        </React.Fragment>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(filter: {node_locale: {eq: "pt"}}) {
      nodes {
        id
        title
        text {
          raw
        }
      }
    }
  }
`

export default BlogPage