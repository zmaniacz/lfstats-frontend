import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

const EventSelect = React.createClass({
  render () {
    const { events, onChange } = this.props

    var options = events.map(function (d, index) {
      return (
        <option key={d.id} value={d.id}>{d.type} - {d.name}</option>
      )
    })

    return (
      <Input type="select" label="Event" placeholder="All" onChange={e => onChange(e.target.value)}>
        <option value="0">All</option>
        {options}
      </Input>
    )
  }
})

EventSelect.PropTypes = {
  events: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default EventSelect
