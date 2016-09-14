import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel } from 'react-bootstrap';
import { AutoSizer, FlexTable, FlexColumn } from 'react-virtualized';

class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'last_game_time',
      sortDirection: 'DESC'
    }

    this._sort = this._sort.bind(this)
  }

  render() {
    const { sortBy, sortDirection } = this.state

    let events = this.props.events;

    events = _.sortBy(events, sortBy)

    if (sortDirection == 'DESC')
      _.reverse(events)

    const rowStyle = {
      borderBottom: '1px solid #e0e0e0'
    }

    return (
      <Panel bsStyle="primary" header={this.props.header}>
        <AutoSizer disableHeight>
          { ({ width }) => (
            <FlexTable
              width={width}
              height={500}
              rowCount={events.length}
              headerHeight={20}
              rowHeight={40}
              rowGetter={ ({index}) => events[index]}
              rowStyle={ rowStyle }
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              >
              <FlexColumn
                label='Event'
                dataKey='name'
                width={width / 3}
                cellRenderer={
                  ({ cellData, columnData, dataKey, rowData, rowIndex }) => {
                    return (
                      <LinkContainer to={`/events/${rowData.id}`}>
                        <Button block bsStyle="info">{_.startCase(cellData) }</Button>
                      </LinkContainer>
                    );
                  }
                }
                />
              <FlexColumn
                label='Type'
                dataKey='type'
                width={width / 3}
                />
              <FlexColumn
                label='Last Played'
                dataKey='last_game_time'
                width={width / 3}
                />
            </FlexTable>
          ) }
        </AutoSizer>
      </Panel>
    );
  }

  _sort({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection })
  }
}

export default EventList;