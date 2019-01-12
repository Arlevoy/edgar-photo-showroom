import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      style={{
        display: 'flex',
        marginBottom: `1.45rem`,
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'overflow-x': 'auto',
      }}
    >
      {data.allInstaNode.edges.map(({ node }) => {
        console.log(node)
        return (
          <div style={{ marginRight: 10 }}>
            <Img key={node.id} fixed={node.localFile.childImageSharp.fixed} />
            <div>{node.caption}</div>
          </div>
        )
      })}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          original
          caption
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
