import React, {Component} from 'react';
import {AutoSizer, Grid, VirtualScroll, FlexTable, FlexColumn } from'react-virtualized';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class GameList extends Component {
  render() {
    var games = this.props.games;
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
            rowGetter={ index => games[index.index] }
            rowStyle={ rowStyle }
          >
            <FlexColumn
              label='Game'
              dataKey='name'
              width={width/5}
              cellRenderer={
                ({ cellData, columnData, dataKey, rowData, rowIndex }) => {
                  return (
                    <LinkContainer to={{ pathname: '/games/'+rowData.id }}>
                      <Button bsStyle={rowData.winner == 'red' ? "danger" : "success"} block>
                        {cellData === null ? "Game " + rowData.id : cellData}
                      </Button>
                    </LinkContainer>
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
}

export default GameList;