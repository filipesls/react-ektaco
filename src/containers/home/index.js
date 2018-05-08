import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

const Home = props => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12}>
        <h1>Home</h1>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={12}>
        Componente Download Json
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={12}>
        Componente Lista JSON
      </Col>
    </Row>
  </Grid>
);

export default Home;
