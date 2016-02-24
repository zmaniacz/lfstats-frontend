import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import DataTable from 'datatables.net';
import { Table, Button } from 'react-bootstrap';
require('datatables.net-bs');

var GameList = React.createClass({
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
  render: function () {
    var table = this.props.list.map(function (d, index) {
      if(d.name === null)
        d.name = "Game " + d.id;

      return (
        <tr key={d.id}>
          <td>
            <Button bsStyle={d.winner == 'Red' ? "danger" : "success"} href="#" block>{d.name}</Button>
          </td>
          <td>
            {d.played_at}
          </td>
          <td>
            {d.green_score}
          </td>
          <td>
            {d.red_score}
          </td>
          <td>
            {d.links.pdf}
          </td>
        </tr>
      );
    });

    return (
      <Table striped bordered hover condensed responsive id="game_list">
        <thead>
          <tr>
            <th>Game</th>
            <th>Date</th>
            <th>Green Score</th>
            <th>Red Score</th>
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
