import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../../actions';
import Navigation from './Navigation';
import Body from './Body';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
  }

  componentDidMount() {
    this.props.submitDate(this.state.startDate.format('YYYY-MM-DD'));
    // this.props.getAPOD();
  }

  render() {
    const {
      // APOD,
      // submitDate,
      neo,
    } = this.props;

    return (
      <div className="App">
        <Navigation />
        <Body neo={neo} />
      </div>
    );
  }
}

App.propTypes = {
  // APOD: PropTypes.shape({
  //   date: PropTypes.string,
  //   explanation: PropTypes.string,
  //   hdurl: PropTypes.string,
  //   media_type: PropTypes.string,
  //   service_version: PropTypes.string,
  //   title: PropTypes.string,
  //   url: PropTypes.string,

  // }),
  submitDate: PropTypes.func.isRequired,
  neo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  const {
    APOD,
    neo,
  } = state;

  return {
    APOD,
    neo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAPOD: () => dispatch(actions.getAPOD()),
    submitDate: date => dispatch(actions.submitDate(date)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
