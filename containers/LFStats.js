import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import LFStatsNavbar from '../components/LFStatsNavbar';

var LFStatsApp = React.createClass({
  render () {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <LFStatsNavbar />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
})

export default LFStatsApp;
