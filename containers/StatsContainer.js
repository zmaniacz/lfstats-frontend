import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SideBarContainer from './SideBarContainer';

class StatsContainer extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={2}>
            <SideBarContainer />
          </Col>
          <Col xs={10}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default StatsContainer;