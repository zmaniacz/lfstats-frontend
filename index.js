import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import LFStats from './containers/LFStats';
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

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LFStats}>
        <IndexRoute component={HomeContainer} />
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
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
