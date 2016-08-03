import React, {Component, PropTypes} from 'react';
import * as ActionTypes from '../actions';
import { Row, Col } from 'react-bootstrap';
import EventListContainer from './EventListContainer';

class HomeContainer extends Component {
  render() {
    return (
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
    );
  }
}

export default HomeContainer;