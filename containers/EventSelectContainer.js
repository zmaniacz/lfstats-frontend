import { connect } from 'react-redux';
import { setEventFilter } from '../actions';
import EventSelect from '../components/EventSelect';


const mapStateToProps = (state) => {
  return {
    events: state.eventList.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event_id) => {
      dispatch(setEventFilter(event_id))
    }
  }
}

const EventSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSelect)

export default EventSelectContainer