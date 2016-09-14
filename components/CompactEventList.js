import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel, Table } from 'react-bootstrap';

class CompactEventList extends Component {
  render() {
    const events = this.props.events;

    return (
      <Panel bsStyle="primary" header={this.props.header}>
        <Table striped condensed hover bordered>
          <thead>
            <tr>
              <th>Event</th>
              <th>Last Game Played</th>
            </tr>
          </thead>
          <tbody>
            {events.map((row, index) => (
              <tr key={index}>
                <td><LinkContainer to={'/events/' + row.id}><Button bsStyle="info" bsSize="xsmall" block>{_.startCase(row.name) }</Button></LinkContainer></td>
                <td>{(new Date(row.last_game_time)).toDateString() }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    );
  }
}

export default CompactEventList;