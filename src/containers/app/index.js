import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import { Grid, Row, Col } from 'react-bootstrap';

const App = () => (
  <Grid>
    <Row className="show-grid">
        <header>
      <Col xs={12} md={6}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
      </Col>
        </header>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={12}>
        <Route exact path="/" component={Home} />
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={12}>
        <Route exact path="/about-us" component={About} />
      </Col>
    </Row>
  </Grid>
);

export default App;
