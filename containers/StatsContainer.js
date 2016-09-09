import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchCenterListIfNeeded, fetchEventListIfNeeded } from '../actions';
import { Row, Col } from 'react-bootstrap';
import CenterSelectContainer from '../containers/CenterSelectContainer';
import EventTypeSelectContainer from '../containers/EventTypeSelectContainer';
import EventSelectContainer from '../containers/EventSelectContainer';

class StatsContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCenterListIfNeeded())
    dispatch(fetchEventListIfNeeded())
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col>
            <CenterSelectContainer />
            <EventTypeSelectContainer />
            <EventSelectContainer />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(StatsContainer);