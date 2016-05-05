import React, { PropTypes } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { SHOW_ALL, SHOW_LEAGUE_EVENTS, SHOW_SOCIAL_EVENTS, SHOW_TOURNAMENT_EVENTS } from '../actions'

const EventTypeSelect = React.createClass({
  render () {
    const { onChange } = this.props
    
    return (
      <FormGroup>
        <ControlLabel>Event Type</ControlLabel>
        <FormControl componentClass="select" placeholder="All" onChange={e => onChange(e.target.value)}>
          <option value={SHOW_ALL}>All</option>
          <option value={SHOW_SOCIAL_EVENTS}>All Social</option>
          <option value={SHOW_LEAGUE_EVENTS}>All League</option>
          <option value={SHOW_TOURNAMENT_EVENTS}>All Tournament</option>
        </FormControl>
      </FormGroup>
    )
  }
})

EventTypeSelect.PropTypes = {
  onChange: PropTypes.func.isRequired
}

export default EventTypeSelect
