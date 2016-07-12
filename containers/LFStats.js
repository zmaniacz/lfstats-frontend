import React, {Component} from 'react';
import HomeContainer from './HomeContainer';
import FilterDock from '../components/FilterDock';
import LFStatsNavBar from '../components/LFStatsNavBar';
 
class LFStats extends Component {
  render() {
    return (
      <div className="container">
        <LFStatsNavBar />
        <div className="row">
          <div className="col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default LFStats;
