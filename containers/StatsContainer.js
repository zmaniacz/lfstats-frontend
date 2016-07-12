import React, {Component} from 'react';
import FilterDock from '../components/FilterDock';

class StatsContainer extends Component {
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

export default StatsContainer;