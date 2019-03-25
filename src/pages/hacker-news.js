import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    allHnStory(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          score
          order
          domain
          url
          by
          descendants
        }
      }
    }
  }
`

export default props => (
  <div>
    {props.data.allHnStory.edges.map(edge =>{
      const story = edge.node
      return (
        <div>
          <a style={{ color: 'inherit' }} href={story.url}>
            {story.title}
            <small style={{ display: 'block'}}>
              {story.score} Point | {story.domain}
            </small>
          </a>
          <br />
        </div>
      )
    })}
  </div>
)
