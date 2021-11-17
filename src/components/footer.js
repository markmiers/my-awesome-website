import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql} from "gatsby"

const Footer = () => {

  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          links {
            href
            text
          }
        }
      }
    }
  `)

  const links = data.site.siteMetadata.links

  return (  
      <footer>
        <Container className="containerFooter">
          <Row>
            <Col xl="6">
              <nav className="footerLinks">
                <ul>
                  {links.map( (link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                      {link.text}
                      </a>
                    </li>)
                    )}
                </ul>
              </nav>
            </Col>
            <Col xl="6">
              <div className="copyright">
                Copyright @ 2021 <a href="https://github.com/gualterandre" rel="noopener noreferrer" target="_blank">Gualter Augusto</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}
export default Footer
