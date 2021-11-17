import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { useStaticQuery, graphql} from "gatsby"

const  Navigation = ({ logo }) => {

  const data = useStaticQuery(graphql`
    query SiteLinksQuery {
      site {
        siteMetadata {
          links {
            href
            text
          }
        }
      }
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  const links=data.site.siteMetadata.links
  const questions = data.allMarkdownRemark.nodes

  return (
      <Navbar variant="dark" bg="dark" expand="md" fixed="top">
      <Navbar.Brand href="/"><img src={logo} alt="my-logo" style={{ height: "25px" }}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
        <NavDropdown title="Questions" id="collasible-nav-dropdown">
            {
              questions.map( question => {
                const title = question.frontmatter.title
                
                return <NavDropdown.Item href={question.frontmatter.slug}>{title}</NavDropdown.Item>
              })
            }
          </NavDropdown>
          {links.map( (link,index) => (
              <Nav.Link key={index}  href={link.href}>{link.text}</Nav.Link>
          )
            )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;