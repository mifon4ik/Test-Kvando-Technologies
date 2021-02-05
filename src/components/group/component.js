import React from 'react';
import { withRouter } from 'react-router-dom';
import GroupElement, { GroupNoFoundElement } from './element';
import Loading from '../common/loading/element';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectSort, getFeed, selectFilter } from '../../redux/group-reducer';

const Group = props => {
  if (props.feed === null) {
    props.getFeed(props.match.params.owner_id);
    return (
      <Loading />
    )
  } else if (props.feed.length === 0) {
    return (
      <GroupNoFoundElement />
    )
  } else {
    return (
      <GroupElement feed={props.feed} filterFeed={props.filterFeed} sort={props.sorting}
        selectSort={props.selectSort} selectFilter={props.selectFilter} />
    )
  }
}

const mapStateToProps = state => {
  return {
    sorting: state.groupData.sorting,
    feed: state.groupData.feed,
    filterFeed: state.groupData.filterFeed
  }
}

export default compose(
  connect(mapStateToProps,
    { selectSort, getFeed, selectFilter }
  ),
  withRouter
)(Group);