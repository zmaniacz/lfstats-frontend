import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import * as ActionTypes from '../actions'
import EventList from '../components/EventList';
import CompactEventList from '../components/CompactEventList';

class EventListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
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
      
      if (this.props.limit) {
        filteredEvents = filteredEvents.slice(0, this.props.limit)
      }
      
      if (this.props.compact) {
        var output = <CompactEventList events={filteredEvents} header={this.props.header} />
      } else {
        var output = <EventList events={filteredEvents} header={this.props.header} />
      }
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
  sort_order: PropTypes.oneOf(['ASC', 'DESC']),
  compact: PropTypes.bool,
  header: PropTypes.string,
}

EventListContainer.defaultProps = {
  limit: null,
  type: ActionTypes.SHOW_SOCIAL_EVENTS,
  sort_by: 'last_game_time',
  sort_order: 'DESC',
  compact: false,
  header: 'Events',
}

const mapStateToProps = (state) => {
  const { eventList } = state
  return {
    isFetching: eventList.isFetching,
    events: eventList.events
  }
}

export default connect(mapStateToProps)(EventListContainer)
