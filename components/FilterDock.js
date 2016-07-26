import React, {Component} from 'react';
import Dock from 'react-dock';
import CenterSelectContainer from '../containers/CenterSelectContainer';
import EventTypeSelectContainer from '../containers/EventTypeSelectContainer';
import EventSelectContainer from '../containers/EventSelectContainer';

class FilterDock extends Component {
  render() {
    return (
      <Dock position="bottom" isVisible={true} dimMode="none" size={.1}>
        <CenterSelectContainer />
        <EventTypeSelectContainer />
        <EventSelectContainer />
      </Dock>
    );
  }
}

export default FilterDock;