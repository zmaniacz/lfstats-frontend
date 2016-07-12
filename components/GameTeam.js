import React, {Component} from 'react';

class GameTeam extends Component {
  render() {
    if(this.props.team.color == "red")
    {
      var style = "panel panel-danger";
      var name = "Red Team";
    }
    else
    {
      var style = "panel panel-success";
      var name = "Green Team";
    }

    return (
      <div className={style} header={name}>
        <table className="table table-striped table-bordered table-condensed table-hover table-responsive">
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
        </table>
      </div>
    );
  }
}

export default GameTeam;