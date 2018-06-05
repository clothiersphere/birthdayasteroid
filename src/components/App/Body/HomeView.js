import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import NeoList from './NeoList';

class HomeView extends Component {
  render() {
    const { neo } = this.props;
    const todaysDate = moment().format('MMMM DD, YYYY');
    const pha = neo.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === 'true');

    const message = () => {
      if (pha.length > 0) {
        return (
          <div>
            At least today is your birthday.
          </div>
        );
      }
      return (
        <div>
          Sorry, the world is not ending today. You still gotta get up for work tomorrow.
        </div>
      );
    };

    const tense = () => {
      if (neo.length === 1) {
        return 'is';
      }
      return 'are';
    };

    return (
      <div className="home-view">
        <span>{todaysDate}</span>
        If today is your birthday, you will be pleased to know
        <div>
          <span className="asteroid-message"> there {tense()} {neo.length} near earth objects: </span>
          <NeoList neo={neo} />
        </div>
        <div className="asteroid-message">
          {pha.length} of those are potentially hazardous asteroids.
          {message()}
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  neo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeView;
