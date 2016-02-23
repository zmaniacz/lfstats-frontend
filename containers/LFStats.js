import React, { PropTypes } from 'react'
import LFStatsNavbar from '../components/LFStatsNavbar';

var LFStatsApp = React.createClass({
  render () {
    return (
      <div>
        <LFStatsNavbar />
        {this.props.children}
      </div>
    )
  }
})

export default LFStatsApp;
