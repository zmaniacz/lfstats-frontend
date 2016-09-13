import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const events = this.props.events;

    if (this.props.compact) {
      var head =  <tr><th>Event</th><th>Last Game Played</th></tr>
    } else {
      var head =  <tr><th>Event</th><th>Type</th><th>Last Game Played</th></tr>
    }

    var body = events.map((row, index) => (
      <tr key={index}>
        <td><LinkContainer to={'/events/' + row.id}><Button bsStyle="info" bsSize="xsmall" block>{_.startCase(row.name)}</Button></LinkContainer></td>
        {(this.props.compact ? "" : <td>{row.type}</td>) }
        <td>{(new Date(row.last_game_time)).toDateString() }</td>
      </tr>
    ));
    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.header}</h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-condensed table-hover table-bordered">
            <thead>
              {head}
            </thead>
            <tbody>
              {body}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EventList;