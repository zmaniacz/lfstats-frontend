import React from 'react';
import LFStatsNavbar from '../components/LFStatsNavbar';
import GameList from '../components/GameList';

var LFStatsApp = React.createClass({
  render: function () {
    return (
      <div>
        <LFStatsNavbar />
        <GameList />
      </div>
    );
  }
});

export default LFStatsApp;
