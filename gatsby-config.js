module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter ベースでつくるGatsbyJSのサイト`,
    description: `はつGraphQL`,
    author: `@zakizaki-ri9`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-source-hacker-news`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

const path = require('path')

// 参照: https://www.gatsbyjs.org/docs/node-apis/
exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  return new Promise((resolve, reject) => {
    // hacker-newsのデータスキーマ
    graphql(`
      allHnStory {
        edges {
        node {
        id
        title
        score
        order
        domain
        url
        }
      }
    }
    `).then(result => {
      // 取得したら `/stories/edges[n].node.id` のパスにページを動的生成する
      result.data.allHnStory.edges.forEach(edge => {
        const node = edge.node
        const path = `/stories/${node.id}`
        console.log(path)
        createPage({
          path: path,
          commonent: path.resolve(`./src/template/story.js`), // ページ動的生成の際に使用されるテンプレート
          context: {
            id: node.id
          }
        })
      })
      resolve()
    })
  })
}