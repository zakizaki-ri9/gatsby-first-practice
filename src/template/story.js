import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const story = data.hnStory
  return (
    <div>
      {story.title}
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    hnStory(id: { eq: $id }) {
      id
      title
      score
      order
      domain
      url
    }
  }
`