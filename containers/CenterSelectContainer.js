import { connect } from 'react-redux';
import { setCenterFilter } from '../actions';
import CenterSelect from '../components/CenterSelect';

const mapStateToProps = (state) => {
  return {
    centers: state.centerList.centers,
    selectedCenter: state.contextFilters.centerFilter.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (center_id) => {
      dispatch(setCenterFilter(center_id))
    }
  }
}

const CenterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterSelect)

export default CenterSelectContainer