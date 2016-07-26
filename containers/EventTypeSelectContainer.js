import { connect } from 'react-redux';
import { setEventTypeFilter } from '../actions';
import EventTypeSelect from '../components/EventTypeSelect';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (type) => {
      dispatch(setEventTypeFilter(type))
    }
  }
}

const EventTypeSelectContainer = connect(
  null,
  mapDispatchToProps
)(EventTypeSelect)

export default EventTypeSelectContainer