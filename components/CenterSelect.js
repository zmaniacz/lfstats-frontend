import React, { PropTypes } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { SHOW_ALL } from '../actions'

const CenterSelect = React.createClass({
  render () {
    const { centers, onChange } = this.props

    var options = centers.map(function (d, index) {
      return (
        <option key={d.id} value={d.id}>{d.name}</option>
      )
    })

    return (
      <FormGroup>
        <ControlLabel>Center</ControlLabel>
        <FormControl componentClass="select" placeholder="All" onChange={e => onChange(e.target.value)}>
          <option value={SHOW_ALL}>All</option>
          {options}
        </FormControl>
      </FormGroup>
    )
  }
})

CenterSelect.PropTypes = {
  centers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CenterSelect
