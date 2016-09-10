import React, {Component} from 'react';

class EventView extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.event)}
      </div>
    );
  }
}

export default EventView;