import React, {Component, PropTypes} from 'react';
import * as ActionTypes from '../actions'
import EventListContainer from './EventListContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-4">
            <EventListContainer type={ActionTypes.SHOW_SOCIAL_EVENTS} />
          </div>
          <div className="col-xs-4">
            <EventListContainer type={ActionTypes.SHOW_TOURNAMENT_EVENTS} />
          </div>
          <div className="col-xs-4">
            <EventListContainer type={ActionTypes.SHOW_LEAGUE_EVENTS} />
          </div>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {

};

export default HomeContainer;