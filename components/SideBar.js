import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

const SideBar = React.createClass({
  render () {
    var options = this.props.centers.map(function (d, index) {
      return (
        <option key={d.id} value={d.id}>{d.name}</option>
      )
    })

    return (
      <div>
        <Input type="select" label="Center" placeholder="All">
          <option value="0">All</option>
          {options}
        </Input>
      </div>
    )
  }
})

export default SideBar
