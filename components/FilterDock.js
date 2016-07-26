import React, {Component} from 'react';
import Dock from 'react-dock';
import CenterSelectContainer from '../containers/CenterSelectContainer';

class FilterDock extends Component {
  render() {
    return (
      <Dock position="bottom" isVisible={true} dimMode="none" size={.1}>
        <CenterSelectContainer />
      </Dock>
    );
  }
}

export default FilterDock;