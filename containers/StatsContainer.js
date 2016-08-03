import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchCenterListIfNeeded, fetchEventListIfNeeded } from '../actions';
import { Row, Col } from 'react-bootstrap';
import FilterDock from '../components/FilterDock';

class StatsContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCenterListIfNeeded())
    dispatch(fetchEventListIfNeeded())
  }
  
  render() {
    return (
      <div>
        <FilterDock />
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