import React, {Component} from 'react';
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
              <li><a href="#">Nightly Stats</a></li>
              <li><a href="#">Top Players</a></li>
              <li><a href="#">Game List</a></li>
              <li><a href="#">Leader(Loser)boards</a></li>
              <li><a href="#">Center Stats</a></li>
              <li><a href="#">All-Center Teams</a></li>
              <li><a href="#">Penalties</a></li>
              <li><a href="#">About SM5</a></li>
              <li><a href="#">Twitch</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default LFStatsNavbar;
