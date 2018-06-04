import React, { Component } from 'react';
import moment from 'moment';
import NeoList from './NeoList';

class HomeView extends Component {
  render() {
    const { neo } = this.props;
    const todaysDate = moment().format('MMM DD, YYYY');

    let neoLength = 0;
    let phaLength = 0;

    if (neo.length > 0) {
      const { nearEarthObjects } = neo;
      neoLength = neo.length;
      const pha = neo.filter(neo => neo.is_potentially_hazardous_asteroid === 'true');
      phaLength = pha.length;
    }

    return (
      <div className="home-view">
      If today {todaysDate} is your birthday, you will be pleased to know:
        <div>
        There are {neoLength} near earth objects:
          <NeoList neo={neo} />
        </div>
        <div>
          {phaLength} of those are potentially hazardous asteroids.
        </div>
      </div>
    );
  }
}

export default HomeView;
