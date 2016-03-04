import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCenterList } from '../actions'
import SideBar from '../components/SideBar'

const SideBarContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchCenters } = this.props
    dispatch(fetchCenterList())
  },
  render () {
    return (
      <SideBar centers={this.props.centers}/>
    )
  }
})

const mapStateToProps = (state) => {
  const { centerList } = state
  return {
    isFetching: centerList.isFetching,
    centers: centerList.centers
  }
}

export default connect(mapStateToProps)(SideBarContainer)
