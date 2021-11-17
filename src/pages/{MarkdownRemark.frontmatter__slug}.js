import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Container, Row, Col } from 'react-bootstrap'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout pageTitle="Questions">
      <Container fluid>
        <Row>
          <Col xl="6" className={`mr-auto ml-auto`}>
            <div dangerouslySetInnerHTML={{ __html: html }}>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`