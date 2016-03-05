import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCenterList, fetchEventList, setCenterFilter, setEventFilter, SHOW_ALL } from '../actions'
import CenterSelect from '../components/CenterSelect'
import EventSelect from '../components/EventSelect'

const SideBarContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchCenters, fetchEvents } = this.props
    dispatch(fetchCenterList())
    dispatch(fetchEventList())
  },
  handleCenterChange(filter) {
    this.props.dispatch(setCenterFilter(filter))
  },
  handleEventChange(filter) {
    this.props.dispatch(setEventFilter(filter))
  },
  render () {
    const centerFilter = this.props.contextFilters.centerFilter.filter

    var filteredEvents = this.props.eventList.events.filter((event) => {
      return (centerFilter != SHOW_ALL ? event.center.data.id == centerFilter : true)
    })

    return (
      <div>
        <CenterSelect centers={this.props.centerList.centers} onChange={this.handleCenterChange} />
        <EventSelect events={filteredEvents} onChange={this.handleEventChange} />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  const { centerList, eventList, contextFilters } = state
  return {
    centerList: centerList,
    eventList: eventList,
    contextFilters: contextFilters
  }
}

export default connect(mapStateToProps)(SideBarContainer)
