import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import * as ActionTypes from '../actions'
import EventList from '../components/EventList'

class EventListContainer extends Component {
  componentDidMount() {
    const { dispatch, fetchEventList } = this.props
    dispatch(ActionTypes.fetchEventListIfNeeded())
  }
  
  render() {
    if(this.props.isFetching || this.props.events.length === 0) {
      var output = "Loading..."
    } else {
      var filteredEvents = this.props.events
      
      if(this.props.type != ActionTypes.SHOW_ALL) {
        filteredEvents = filteredEvents.filter((event) => {
          switch (this.props.type) {
            case ActionTypes.SHOW_LEAGUE_EVENTS:
              return (event.type == 'league')
            case ActionTypes.SHOW_SOCIAL_EVENTS:
              return (event.type == 'social')
            case ActionTypes.SHOW_TOURNAMENT_EVENTS:
              return (event.type == 'tournament')
            default:
              return false
          }
        })
      }
      
      filteredEvents = filteredEvents.sort(function(a, b) {
        return new Date(b.last_game_time) - new Date(a.last_game_time);
      })
      
      filteredEvents = filteredEvents.slice(0,this.props.limit)
      
      var header = ""
      switch(this.props.type) {
        case ActionTypes.SHOW_LEAGUE_EVENTS:
          header = "Recent Leagues"
          break;
        case ActionTypes.SHOW_SOCIAL_EVENTS:
          header = "Recent Social Events"
          break;
        case ActionTypes.SHOW_TOURNAMENT_EVENTS:
          header = "Recent Tournaments"
          break;
        case ActionTypes.SHOW_ALL:
          header = "Recent Events"
          break;
      }
      
      var output = <EventList events={filteredEvents} header={header} />
    }
    return (
      <div>
        {output}
      </div>
    )
  }
}

EventListContainer.propTypes = {
  limit: PropTypes.number,
  type: PropTypes.oneOf([ActionTypes.SHOW_ALL, ActionTypes.SHOW_SOCIAL_EVENTS, ActionTypes.SHOW_LEAGUE_EVENTS, ActionTypes.SHOW_TOURNAMENT_EVENTS]),
  sort_by: PropTypes.string,
  sort_order: PropTypes.oneOf(['ASC', 'DESC'])
}

EventListContainer.defaultProps = {
  limit: 5,
  type: ActionTypes.SHOW_SOCIAL_EVENTS,
  sort_by: 'last_game_time',
  sort_order: 'DESC'
}

const mapStateToProps = (state) => {
  const { eventList } = state
  return {
    isFetching: eventList.isFetching,
    events: eventList.events
  }
}

export default connect(mapStateToProps)(EventListContainer)
