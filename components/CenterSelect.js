import React, {PropTypes} from 'react';
import { SHOW_ALL } from '../actions';

const CenterSelect = ({centers, selectedCenter, onChange}) => {
  return (
      <form>
        <div className="form-group">
          <label htmlFor="centerSelect">Center</label>
          <select className="form-control" id="centerSelect" onChange={e => onChange(e.target.value) } value={selectedCenter}>
            <option value={SHOW_ALL}>All</option>
            {centers.map( (row, index) => (
              <option key={index} value={row.id}>{row.name}</option>
            ))}
          </select>
        </div>
      </form>
  );
};

CenterSelect.PropTypes = {
  centers: PropTypes.array.isRequired,
  selectedCenter: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CenterSelect;