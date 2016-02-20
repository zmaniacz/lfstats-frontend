import React, { PropTypes } from 'react';
import Request from 'superagent';
import jQuery from 'jquery';
import DataTable from 'datatables.net';
import { Table } from 'react-bootstrap';
require('datatables.net-bs');

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
      if(d.name === null)
        d.name = "Game " + d.id;

      return <tr key={d.id}><td>{d.name}</td><td>{d.played_at}</td><td></td></tr>
    });

    return (
      <Table striped bordered hover condensed responsive id="game_list">
        <thead>
          <tr>
            <th>Game</th>
            <th>Date</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </Table>
    );
  }
});

export default GameList;
