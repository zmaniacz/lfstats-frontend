import React, {Component} from 'react';
import { Table, Button, Panel } from 'react-bootstrap';

class EventList extends Component {
  render() {
    var table = this.props.events.map(function (e, index) {
      if(e.name === null)
        e.name = "Event " + e.id;
        
      return (
        <tr key={e.id}>
          <td>{e.name}</td>
          <td>{e.type}</td>
          <td>{e.last_game_time}</td>
        </tr>
      );
    });
    
    return (
      <Panel header={this.props.header} bsStyle="info">
        <Table striped bordered hover condensed responsive id="event_list">
          <thead>
            <tr>
              <th>Event</th>
              <th>Type</th>
              <th>Last Game Played</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </Table>
      </Panel>
    );
  }
}

export default EventList;