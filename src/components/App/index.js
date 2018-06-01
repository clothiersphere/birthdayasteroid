import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class App extends Component {
  componentDidMount() {
    (console.log('hi'));
  }


  render() {
    return (
      <div className="App">
        Happy Birthday Asteroid
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {

  } = state;

  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

    submitDate: date => dispatch(actions.submitDate(date)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
