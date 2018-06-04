import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../../actions';
import Body from './Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
  }

  componentDidMount() {
    this.props.getAPOD();
    this.props.submitDate(this.state.startDate.format('YYYY-MM-DD'));
  }

  render() {
    const {
      APOD,
      submitDate,
      asteroidList,
    } = this.props;

    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    APOD,
    asteroidList,
  } = state;

  return {
    APOD,
    asteroidList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAPOD: () => dispatch(actions.getAPOD()),
    submitDate: date => dispatch(actions.submitDate(date)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
