import React, {Component} from 'react';
import Request from 'superagent';
import Config from 'Config';
import EventView from '../components/EventView';

class EventViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loaded: false
    }
  }
  
  componentDidMount() {
     this.serverRequest = Request
      .get(Config.serverUrl+'events/'+this.props.eventId)
      .end(function(err, res) {
        this.setState({
          data: res.body.data,
          loaded: true
        });
      }.bind(this));
  }
  
  render() {
    if(this.state.loaded) {
      var response = <EventView event={this.state.data} />
    }
    else {
      var response = "Loading";
    }

    return (
      <div>{response}</div>
    )
  }
}

export default EventViewContainer;