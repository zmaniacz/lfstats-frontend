import React, {Component, PropTypes} from 'react';
import * as ActionTypes from '../actions';
import { Row, Col } from 'react-bootstrap';
import EventListContainer from './EventListContainer';

class HomeContainer extends Component {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <EventListContainer compact limit={5} type={ActionTypes.SHOW_SOCIAL_EVENTS} header="Recent Social Events" />
        </Col>
        <Col xs={4}>
          <EventListContainer compact limit={5} type={ActionTypes.SHOW_TOURNAMENT_EVENTS} header="Recent Tournaments" />
        </Col>
        <Col xs={4}>
          <EventListContainer compact limit={5} type={ActionTypes.SHOW_LEAGUE_EVENTS} header="Recent Leagues" />
        </Col>
      </Row>
    );
  }
}

export default HomeContainer;