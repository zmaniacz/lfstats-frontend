import React from 'react';
import Request from 'superagent';
import jQuery from 'jquery';
import DataTable from 'datatables.net';

var GameList = React.createClass({
  getInitialState: function () {
    return {
      data: []
    };
  },
  componentWillMount: function () {
    this.serverRequest = Request
      .get('http://lfstats.app/api/games/')
      .end(function(err, res) {
        this.setState({
          data: res.body.data
        });
      }.bind(this));
  },
  componentDidMount: function() {
    jQuery('#game_list').DataTable();
  },
  componentWillUpdate: function() {
    var table = jQuery('#game_list').DataTable();
    table.destroy();
  },
  componentDidUpdate: function() {
    jQuery('#game_list').DataTable();
  },
  componentWillUnmount: function () {
    this.serverRequest.abort();
  },
  render: function () {
    var table = this.state.data.map(function (d, index) {
      return <tr key={d.id}><td>{d.id}</td><td>{d.played_at}</td></tr>
    });

    return (
      <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover table-condensed" id="game_list">
        <thead>
          <tr>
            <th>id</th>
            <th>played_at</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
      </div>
    );
  }
});

export default GameList;
