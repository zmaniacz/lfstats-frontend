import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

const CenterSelect = React.createClass({
  render () {
    const { centers, onChange } = this.props

    var options = centers.map(function (d, index) {
      return (
        <option key={d.id} value={d.id}>{d.name}</option>
      )
    })

    return (
      <Input type="select" label="Center" placeholder="All" onChange={e => onChange(e.target.value)}>
        <option value="0">All</option>
        {options}
      </Input>
    )
  }
})

CenterSelect.PropTypes = {
  centers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CenterSelect
