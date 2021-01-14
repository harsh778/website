/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require("prismjs/themes/prism-tomorrow.css")
require("hooker/hooker.js")
require("gatsby/gatsby.js")
require("netlify-toml/netlify.ts")
const { createFilePath } = require(gatsby-source-filesystem)
exports.onCreateNode = ({ node, getNode, actions }) => {
const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
      readme: md
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
}
