import React, {Component} from 'react';
import {Link} from 'react-router';
import FacebookLogin from './FacebookLogin';

class LFStatsNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#lfstats-navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="lfstats-navbar">
            <ul className="nav navbar-nav">
              <li><Link to={'/'}>Events</Link></li>
              <li><Link to={'/players'}>Top Players</Link></li>
              <li><Link to={'/games'}>Game List</Link></li>
              <li><Link to={'/leaderboards'}>Leader(Loser)boards</Link></li>
              <li><Link to={'/centers'}>Center Stats</Link></li>
              <li><Link to={'/allcenter'}>All-Center Teams</Link></li>
              <li><Link to={'/penalties'}>Penalties</Link></li>
              <li><Link to={'/about'}>About SM5</Link></li>
              <li><Link to={'/twitch'}>Twitch</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default LFStatsNavbar;
