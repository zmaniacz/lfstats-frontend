import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const events = this.props.events;
    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.header}</h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-condensed table-hover table-bordered">
            <thead>
              <tr>
                <th>Event</th>
                <th>Last Game Played</th>
              </tr>
            </thead>
            <tbody>
              {events.map( (row, index) => (
                <tr key={index}>
                  <td><LinkContainer to={'/events/'+row.id}><Button bsStyle="info" bsSize="xsmall" block>{row.name}</Button></LinkContainer></td>
                  <td>{(new Date(row.last_game_time)).toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EventList;