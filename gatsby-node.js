// 参照: https://www.gatsbyjs.org/docs/node-apis/
exports.createPages = ({
  graphql
}) => {
  return new Promise((resolve, reject) => {
    // hacker-newsのデータスキーマ
    graphql(`
      {
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
      }
    `).then(result => {
      // 取得したらresolve
      console.log(JSON.stringify(result.data, null, 2))
      resolve()
    })
  })
}