import React, {PropTypes} from 'react';
import { SHOW_ALL } from '../actions';

const EventSelect = ({events, onChange}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="eventSelect">Event</label>
        <select className="form-control" id="eventSelect" onChange={e => onChange(e.target.value) }>
          <option value={SHOW_ALL}>All</option>
          {events.map((row, index) => (
            <option key={index} value={row.id}>{row.type} - {row.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

EventSelect.propTypes = {
  events: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EventSelect;
