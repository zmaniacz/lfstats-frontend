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
