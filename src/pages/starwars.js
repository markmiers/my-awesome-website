import * as React from "react"

import Layout from "../components/layout"
import { Container, Row, Col } from 'react-bootstrap'

const QuestionsPage = () => {
  
  const [name, setName] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  
  React.useEffect(() => {
    fetch('/get-trivia')
      .then(results => results.json())
      .then(data => {
        setName(data.name);
        setHeight(data.height);
      });
  }, []);

  return (
    <Layout pageTitle="Trivia">
      <Container fluid>
        <Row>
          <Col xl="6" className={`mr-auto ml-auto`}>
          <h3>Here is a random character from Star Wars!</h3>
          <div>
            <p>Name: {name}</p>
            <p>Height: {height}</p>
          </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default QuestionsPage
