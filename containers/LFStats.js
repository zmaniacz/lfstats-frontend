import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HomeContainer from './HomeContainer';
import FilterDock from '../components/FilterDock';
import LFStatsNavBar from '../components/LFStatsNavBar';
 
class LFStats extends Component {
  render() {
    return (
      <Grid>
        <LFStatsNavBar />
        <Row>
          <Col lg={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LFStats;
