import React, { PropTypes } from 'react'
import LFStatsNavbar from '../components/LFStatsNavbar';
import GameListContainer from '../components/GameListContainer';

var LFStatsApp = React.createClass({
  render () {
    return (
      <div>
        <LFStatsNavbar />
        <GameListContainer />
      </div>
    )
  }
})

export default LFStatsApp;
