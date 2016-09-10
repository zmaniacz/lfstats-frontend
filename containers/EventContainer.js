import React, {Component} from 'react';
import * as ActionTypes from '../actions'
import EventListContainer from './EventListContainer';
import EventViewContainer from './EventViewContainer';

class EventContainer extends Component {
  render() {
    return (
      this.props.params.id ? <EventViewContainer eventId={this.props.params.id} /> : <EventListContainer type={ActionTypes.SHOW_ALL}/>
    );
  }
}

export default EventContainer;