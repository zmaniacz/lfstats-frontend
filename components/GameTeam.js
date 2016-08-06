import React, {Component} from 'react';

class GameTeam extends Component {
  render() {
    const { color, score, bonus_score, penalty_score } = this.props.team;
    var scorecards = this.props.team.scorecards.data;

    if (color == "red") {
      var style = "panel panel-danger";
      var name = "Red Team";
    }
    else {
      var style = "panel panel-success";
      var name = "Green Team";
    }

    return (
      <div className={style}>
        <div className="panel-heading">{name} - Score: {score}</div>
        <div className="panel-body">
          <div className="table-responsive">
          <table className="table table-striped table-bordered table-condensed table-hover table-responsive">
            <thead>
              <tr>
                <th>Merc</th>
                <th>Alive</th>
                <th>Name</th>
                <th>Position</th>
                <th>Score</th>
                <th>MVP</th>
                <th>Accuracy</th>
                <th>Hit Diff</th>
                <th>Missiled/Got Missiled</th>
                <th>Medic Hits</th>
                <th>Penalties</th>
              </tr>
            </thead>
            <tbody>
              {_.sortBy(scorecards, 'score').reverse().map( (row, index) => (
                <tr className="text-center" key={index}>
                  <td>{(row.is_sub) ? <span className="glyphicon glyphicon-asterisk"></span> : ''}</td>
                  <td>{(row.lives_left > 0) ? <span className="text-success glyphicon glyphicon-ok"></span> : <span className="text-danger glyphicon glyphicon-remove"></span>}</td>
                  <td>{row.player_name}</td>
                  <td>{row.position}</td>
                  <td>{row.score}</td>
                  <td>{row.mvp}</td>
                  <td>{(Math.round(row.accuracy*100)/100)*100}%</td>
                  <td>{(Math.round((row.shot_opponent/row.times_zapped)*100)/100)}</td>
                  <td>{row.missiled_opponent} / {row.times_missiled}</td>
                  <td>{row.medic_hits}{(row.position == 'commander' ? row.medic_nukes : '')}</td>
                  <td>{row.penalties}</td>
                </tr>
              )) }
            </tbody>
          </table>
          </div>
        </div>  
      </div>
    );
  }
}

export default GameTeam;