import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import { AutoSizer, FlexTable, FlexColumn } from 'react-virtualized';

class GameList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sortBy: 'played_at',
      sortDirection: 'ASC'
    }

    this._sort = this._sort.bind(this)
  }
  
  render() {
    const { sortBy, sortDirection } = this.state

    let games = this.props.games
    
    games = _.sortBy(games, sortBy)
    
    if (sortDirection == 'DESC')
      _.reverse(games)

    const rowStyle = {
      borderBottom:'1px solid #e0e0e0'
    }
    
    return (
      <AutoSizer disableHeight>
        { ({ width }) => (
          <FlexTable
            width={width}
            height={500}
            rowCount={games.length}
            headerHeight={20}
            rowHeight={40}
            rowGetter={ ({index}) => games[index] }
            rowStyle={ rowStyle }
            sort={this._sort}
            sortBy={sortBy}
            sortDirection={sortDirection}
          >
            <FlexColumn
              label='Game'
              dataKey='name'
              width={width/5}
              cellRenderer={
                ({ cellData, columnData, dataKey, rowData, rowIndex }) => {
                  return (
                    <Link to={`/games/${rowData.id}`} className={rowData.winner == 'red' ? "btn btn-danger btn-block" : "btn btn-success btn-block"} href="#">
                      {cellData === null ? "Game " + rowData.id : cellData}
                    </Link>
                  );
                }
              }
            />
            <FlexColumn
              label='Time'
              dataKey='played_at'
              width={width/5}
            />
            <FlexColumn
              label='Red Score'
              dataKey='red_score'
              width={width/5}
            />
            <FlexColumn
              label='Green Score'
              dataKey='green_score'
              width={width/5}
            />
            <FlexColumn
              label='PDF'
              dataKey='pdf'
              width={width/5}
            />
          </FlexTable>
        )}
      </AutoSizer>
    );
  }

  _sort ({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection })
  }
}

export default GameList