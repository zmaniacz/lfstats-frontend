import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'
import { SHOW_ALL, SHOW_LEAGUE_EVENTS, SHOW_SOCIAL_EVENTS, SHOW_TOURNAMENT_EVENTS } from '../actions'

const EventSelect = React.createClass({
  render () {
    const { events, onChange } = this.props

    var options = events.map(function (d, index) {
      let text = d.type+' - '+d.name
      return (
        <option key={d.id} value={d.id}>{text}</option>
      )
    })

    return (
      <Input type="select" label="Event" placeholder="All" onChange={e => onChange(e.target.value)}>
        <option value={SHOW_ALL}>All</option>
        <option value={SHOW_SOCIAL_EVENTS}>All Social</option>
        <option value={SHOW_LEAGUE_EVENTS}>All League</option>
        <option value={SHOW_TOURNAMENT_EVENTS}>All Tournament</option>
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
