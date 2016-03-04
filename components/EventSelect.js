import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

const EventSelect = React.createClass({
  render () {
    var options = this.props.events.map(function (d, index) {
      return (
        <option key={d.id} value={d.id}>{d.type} - {d.name}</option>
      )
    })

    return (
      <Input type="select" label="Event" placeholder="All">
        <option value="0">All</option>
        {options}
      </Input>
    )
  }
})

export default EventSelect
