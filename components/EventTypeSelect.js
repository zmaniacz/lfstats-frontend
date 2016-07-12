import React, {Component,PropTypes} from 'react';
import { SHOW_ALL, SHOW_LEAGUE_EVENTS, SHOW_SOCIAL_EVENTS, SHOW_TOURNAMENT_EVENTS } from '../actions';

class EventTypeSelect extends Component {
  render() {
    const { onChange } = this.props
    
    return (
      <form>
        <div className="form-group">
          <label for="eventTypeSelect">Event Type</label>
          <select className="form-control" id="eventTypeSelect" onChange={e => onChange(e.target.value) }>
            <option value={SHOW_ALL}>All</option>
            <option value={SHOW_SOCIAL_EVENTS}>All Social</option>
            <option value={SHOW_LEAGUE_EVENTS}>All League</option>
            <option value={SHOW_TOURNAMENT_EVENTS}>All Tournament</option>
          </select>
        </div>
      </form>  
    );
  }
}

EventTypeSelect.PropTypes = {
  onChange: PropTypes.func.isRequired
}

export default EventTypeSelect;
