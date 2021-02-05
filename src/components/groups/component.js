import React from 'react';
import { connect } from 'react-redux';
import { searchGroup } from '../../redux/groups-reducer';
import GroupsElement from './element';

const Groups = props => {
  return (
    <GroupsElement searchGroup={props.searchGroup} groups={props.groups} />
  )
}

const mapStateToProps = store => {
  return {
    groups: store.groupsData.groups
  }
}

export default connect(mapStateToProps, {
  searchGroup
})(Groups);