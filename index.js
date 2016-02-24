import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import LFStats from './containers/LFStats';
import AboutContainer from './containers/AboutContainer';
import AllCenterTeamContainer from './containers/AllCenterTeamContainer';
import CenterContainer from './containers/CenterContainer';
import GameContainer from './containers/GameContainer';
import LeaderBoardContainer from './containers/LeaderBoardContainer';
import NightlyStatContainer from './containers/NightlyStatContainer';
import PenaltyContainer from './containers/PenaltyContainer';
import PlayerContainer from './containers/PlayerContainer';
import TwitchContainer from './containers/TwitchContainer';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={LFStats}>
      <Route path="/about" component={AboutContainer} />
      <Route path="/allcenter" component={AllCenterTeamContainer} />
      <Route path="/centers" component={CenterContainer} />
      <Route path="/games" component={GameContainer}>
        <Route path="/games/:gameId" component={GameContainer} />
      </Route>
      <Route path="/leaderboards" component={LeaderBoardContainer} />
      <Route path="/nightly" component={NightlyStatContainer} />
      <Route path="/penalties" component={PenaltyContainer} />
      <Route path="/players" component={PlayerContainer} />
      <Route path="/twitch" component={TwitchContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
