import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>
      My First Component
    </h1>
    <Link to="/">
      Back to Home
    </Link>
  </Layout>
)

export default IndexPage
