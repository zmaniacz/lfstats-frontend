import React, {PropTypes} from 'react';
import { SHOW_ALL, SHOW_LEAGUE_EVENTS, SHOW_SOCIAL_EVENTS, SHOW_TOURNAMENT_EVENTS } from '../actions';

const EventTypeSelect = ({selectedEventType, onChange}) => {
  return (
      <form>
        <div className="form-group">
          <label htmlFor="eventTypeSelect">Event Type</label>
          <select className="form-control" id="eventTypeSelect" onChange={e => onChange(e.target.value) } value={selectedEventType}>
            <option value={SHOW_ALL}>All</option>
            <option value={SHOW_SOCIAL_EVENTS}>All Social</option>
            <option value={SHOW_LEAGUE_EVENTS}>All League</option>
            <option value={SHOW_TOURNAMENT_EVENTS}>All Tournament</option>
          </select>
        </div>
      </form>  
  );
};

EventTypeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedEventType: PropTypes.any.isRequired
};

export default EventTypeSelect;