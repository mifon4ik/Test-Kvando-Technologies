import React from 'react';
import { connect } from 'react-redux';
import IndexElement from './element';
import { vkLogin } from '../../redux/index-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Login = props => {
  return (
    <IndexElement vkLogin={props.vkLogin} />
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.indexData.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { vkLogin }),
  withAuthRedirect
) (Login);