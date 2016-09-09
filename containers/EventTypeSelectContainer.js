import { connect } from 'react-redux';
import { setEventTypeFilter } from '../actions';
import EventTypeSelect from '../components/EventTypeSelect';

const mapStateToProps = (state) => {
  return {
    selectedEventType: state.contextFilters.eventTypeFilter.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (type) => {
      dispatch(setEventTypeFilter(type))
    }
  }
}

const EventTypeSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventTypeSelect)

export default EventTypeSelectContainer