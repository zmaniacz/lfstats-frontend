import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCenterList, fetchEventList } from '../actions'
import SideBar from '../components/SideBar'

const SideBarContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchCenters, fetchEvents } = this.props
    dispatch(fetchCenterList())
    dispatch(fetchEventList())
  },
  render () {
    return (
      <SideBar centers={this.props.centerList.centers} events={this.props.eventList.events} />
    )
  }
})

const mapStateToProps = (state) => {
  const { centerList, eventList } = state
  return {
    centerList: centerList,
    eventList: eventList
  }
}

export default connect(mapStateToProps)(SideBarContainer)
