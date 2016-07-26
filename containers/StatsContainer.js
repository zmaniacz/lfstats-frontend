import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchCenterListIfNeeded, fetchEventListIfNeeded } from '../actions';
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
        <div className="row">
          <div className="col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(StatsContainer);