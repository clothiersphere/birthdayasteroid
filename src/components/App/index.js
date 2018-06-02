import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import APODcard from './APODcard';


class App extends Component {
  componentDidMount() {
    this.props.getAPOD();
  }

  render() {
    const {
      APOD,
    } = this.props;

    return (
      <div className="App">
        <APODcard data={APOD} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    APOD,
  } = state;

  return {
    APOD,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAPOD: () => dispatch(actions.getAPOD()),
    submitDate: date => dispatch(actions.submitDate(date)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
