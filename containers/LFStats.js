import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import LFStatsNavbar from '../components/LFStatsNavbar';

var LFStatsApp = React.createClass({
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <LFStatsNavbar />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            Sidebar
          </Col>
          <Col xs={10}>
            {this.props.children}
          </Col>
        </Row>

      </Grid>
    )
  }
})

export default LFStatsApp;
