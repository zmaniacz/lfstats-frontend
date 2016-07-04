import React, {Component} from 'react';
import HomeContainer from './HomeContainer';
import LFStatsNavBar from '../components/LFStatsNavBar';
 
class LFStats extends Component {
  render() {
    return (
      <div className="container">
        <LFStatsNavBar />
        <div className="row">
          <div className="col-xs-12">
            <HomeContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default LFStats;
