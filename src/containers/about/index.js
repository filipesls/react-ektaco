import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const About = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12}>
        <h1>About Page</h1>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={12}>
        <p>My name is Filipe</p>
      </Col>
    </Row>
  </Grid>
);

export default About;
