import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ActionTypes from '../actions'
import CenterSelect from '../components/CenterSelect'
import EventTypeSelect from '../components/EventTypeSelect'
import EventSelect from '../components/EventSelect'

const SideBarContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchCenters, fetchEvents } = this.props
    dispatch(ActionTypes.fetchCenterList())
    dispatch(ActionTypes.fetchEventList())
  },
  handleCenterChange(filter) {
    this.props.dispatch(ActionTypes.setCenterFilter(filter))
  },
  handleEventTypeChange(filter) {
    this.props.dispatch(ActionTypes.setEventTypeFilter(filter))
  },
  handleEventChange(filter) {
    this.props.dispatch(ActionTypes.setEventFilter(filter))
  },
  render () {
    const centerFilter = this.props.contextFilters.centerFilter.filter
    const eventTypeFilter = this.props.contextFilters.eventTypeFilter.filter

    var filteredEvents = this.props.eventList.events
    
    if(eventTypeFilter != ActionTypes.SHOW_ALL) {
      filteredEvents = filteredEvents.filter((event) => {
        switch(eventTypeFilter) {
          case ActionTypes.SHOW_SOCIAL_EVENTS:
            return (event.type == 'social')
          case ActionTypes.SHOW_LEAGUE_EVENTS:
            return (event.type == 'league')
          case ActionTypes.SHOW_TOURNAMENT_EVENTS:
            return (event.type == 'tournament')
          default:
            return true
        }
      })
    }

    return (
      <div>
        <form>
          <CenterSelect centers={this.props.centerList.centers} onChange={this.handleCenterChange} />
          <EventTypeSelect onChange={this.handleEventTypeChange} />
          <EventSelect events={filteredEvents} onChange={this.handleEventChange} />
        </form>
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
