import React, {Component, PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import * as ActionTypes from '../actions'
import EventListContainer from './EventListContainer';

class HomeContainer extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            Recent News
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <EventListContainer type={ActionTypes.SHOW_SOCIAL_EVENTS} />
          </Col>
          <Col xs={4}>
            <EventListContainer type={ActionTypes.SHOW_TOURNAMENT_EVENTS} />
          </Col>
          <Col xs={4}>
            <EventListContainer type={ActionTypes.SHOW_LEAGUE_EVENTS} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

HomeContainer.propTypes = {

};

export default HomeContainer;