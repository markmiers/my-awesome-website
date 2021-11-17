import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Row, Col } from 'react-bootstrap'

import Gualter from '../images/me.jpg'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteQuestionQuery {
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

  const questions = data.allMarkdownRemark.nodes

  return (
      <Layout pageTitle="Main" indexPage>
          <section>
            <Container fluid>
              <Row>
                <Col xl="3" className={`mr-auto ml-auto`}>
                  <div >
                    <img style={{ width: "100%", borderRadius: "10%" }} src={Gualter} alt="gualter-augusto" />
                  </div>
                </Col>
                <Col xl="6" className={`mr-auto ml-auto`}>
                  <h3>Hi</h3>
                  <p>Super excited to work on this. I have a background in Engineering and have made my career in Support so far. I love to learn new technologies and create processes to improve my day-to-day tasks.</p>
                  <p>I'm from the sunny country of Portugal, there is no better place to live!</p>
                  <p>On the left you can see a picture of Lello Bookstore from my hometown. It is said to have been the inspiration to the Harry Potter series.</p>
                  <p>Let's roll!</p>
                </Col>
              </Row>
              <Row>
                <Col xl="9" style={{marginTop: "50px"}} className={`mr-auto ml-auto`}>
                  <h3>Follow the links to each question</h3>
                  {
                    questions.map( question => {
                      const title = question.frontmatter.title
                      return <p>
                              <Link to={question.frontmatter.slug}>
                                <span>{title}</span>
                              </Link>
                            </p>   
                    })
                  }
                </Col>
              </Row>            
            </Container>
          </section>
      </Layout>
    )
  }




export default IndexPage
