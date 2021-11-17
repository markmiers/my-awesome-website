/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from 'react-bootstrap'

import Header from "./header"
import Footer from "./footer"
import SEO from './seo'

import  Top from './top'

const Layout = ({ children, pageTitle, indexPage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let top
  if (indexPage) {
    top = <Top />
  }
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={pageTitle} />
      {top}
      <Container fluid >
        <main style={{ marginTop: indexPage ? "-60px": "120px" }} className="main mainRaised">{children}</main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.propTypes = {
  pageTitle: PropTypes.node.isRequired,
}


export default Layout
