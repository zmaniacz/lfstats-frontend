import React, { PropTypes } from 'react'
import CenterSelect from './CenterSelect'
import EventSelect from './EventSelect'

const SideBar = React.createClass({
  render () {
    return (
      <div>
        <CenterSelect centers={this.props.centers} />
        <EventSelect events={this.props.events} />
      </div>
    )
  }
})

export default SideBar
