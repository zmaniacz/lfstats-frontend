import React, {Component,PropTypes} from 'react';
import { SHOW_ALL } from '../actions';

class CenterSelect extends Component {
  render() {
    const { centers, onChange } = this.props;

    return (
      <form>
        <div className="form-group">
          <label for="centerSelect">Center</label>
          <select className="form-control" id="centerSelect" onChange={e => onChange(e.target.value)}>
            <option value={SHOW_ALL}>All</option>
            {centers.map( (row, index) => (
              <option key={index} value={row.id}>{row.name}</option>
            ))}
          </select>
        </div>
      </form>
    );
  }
}

CenterSelect.PropTypes = {
  centers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CenterSelect;
