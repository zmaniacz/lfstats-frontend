import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import 'react-virtualized/styles.css';
import configureStore from './store/configureStore';
import LFStats from './containers/LFStats';
import StatsContainer from './containers/StatsContainer';
import AboutContainer from './containers/AboutContainer';
import HomeContainer from './containers/HomeContainer';
import AllCenterTeamContainer from './containers/AllCenterTeamContainer';
import CenterContainer from './containers/CenterContainer';
import GameContainer from './containers/GameContainer';
import LeaderBoardContainer from './containers/LeaderBoardContainer';
import EventListContainer from './containers/EventListContainer';
import PenaltyContainer from './containers/PenaltyContainer';
import PlayerContainer from './containers/PlayerContainer';
import TwitchContainer from './containers/TwitchContainer';
import UploadContainer from './containers/UploadContainer';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LFStats}>
        <IndexRoute component={HomeContainer} />
        <Route component={StatsContainer}>
          <Route path="/about" component={AboutContainer} />
          <Route path="/allcenter" component={AllCenterTeamContainer} />
          <Route path="/centers" component={CenterContainer} />
          <Route path="/games" component={GameContainer}>
            <Route path="/games/:gameId" component={GameContainer} />
          </Route>
          <Route path="/leaderboards" component={LeaderBoardContainer} />
          <Route path="/events/" component={EventListContainer} />
          <Route path="/penalties" component={PenaltyContainer} />
          <Route path="/players" component={PlayerContainer} />
          <Route path="/twitch" component={TwitchContainer} />
          <Route path="/upload" component={UploadContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));