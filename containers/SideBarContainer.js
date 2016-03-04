import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCenterList, fetchEventList, setCenterFilter, setEventFilter } from '../actions'
import CenterSelect from '../components/CenterSelect'
import EventSelect from '../components/EventSelect'

const SideBarContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchCenters, fetchEvents } = this.props
    dispatch(fetchCenterList())
    dispatch(fetchEventList())
  },
  handleCenterChange(center_id) {
    this.props.dispatch(setCenterFilter(center_id))
  },
  handleEventChange(event_id) {
    this.props.dispatch(setEventFilter(event_id))
  },
  render () {
    return (
      <div>
        <CenterSelect centers={this.props.centerList.centers} onChange={this.handleCenterChange} />
        <EventSelect events={this.props.eventList.events} onChange={this.handleEventChange} />
      </div>
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
