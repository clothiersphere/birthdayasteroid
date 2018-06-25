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
  }

  render() {
    const {
      // APOD,
      // submitDate,
      entry,
      createBdayEntry,
      history,
      neo,
      dataReset,
    } = this.props;

    return (
      <div className="App">
        <Navigation history={history} />
        <Body dataReset={dataReset} neo={neo} createBdayEntry={createBdayEntry} entry={entry} />
        <div className="footer">
          footer
        </div>
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
  history: PropTypes.shape({}).isRequired,
  entry: PropTypes.shape({}).isRequired,
  createBdayEntry: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {
    APOD,
    neo,
    entry,
  } = state;

  return {
    APOD,
    neo,
    entry,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAPOD: () => dispatch(actions.getAPOD()),
    submitDate: date => dispatch(actions.submitDate(date)),
    createBdayEntry: info => dispatch(actions.createBdayEntry(info)),
    dataReset: () => dispatch(actions.dataReset()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
