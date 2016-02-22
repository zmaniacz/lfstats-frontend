import React, { PropTypes } from 'react'
import LFStatsNavbar from '../components/LFStatsNavbar';
import FacebookLogin from 'react-facebook-login';
import GameListContainer from '../components/GameListContainer';

const responseFacebook = (response) => {
  console.log(response);
}

var LFStatsApp = React.createClass({
  render () {
    return (
      <div>
        <LFStatsNavbar />
        <FacebookLogin appId="201537433252076" autoLoad={true} callback={responseFacebook} />
        <GameListContainer />
      </div>
    )
  }
})

export default LFStatsApp;
