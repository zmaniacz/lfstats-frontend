import React, {Component} from 'react';
import { Panel, Table } from 'react-bootstrap';

class GameTeam extends Component {
  render() {
    if(this.props.team.color == "red")
    {
      var style = "danger";
      var name = "Red Team";
    }
    else
    {
      var style = "success";
      var name = "Green Team";
    }
    return (
      <Panel bsStyle={style} header={name}>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Merc</th>
              <th>Alive</th>
              <th>Name</th>
              <th>Position</th>
              <th>Score</th>
              <th>MVP Points</th>
              <th>Accuracy</th>
              <th>Hit Diff</th>
              <th>Missiled/Got Missiled</th>
              <th>Medic Hits</th>
              <th>Penalties</th>
            </tr>
          </thead>
        </Table>
      </Panel>
    );
  }
}

export default GameTeam;