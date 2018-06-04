import React from 'react';

const HomeView = (props) => {
  let neoLength = 0;
  let phaLength = 0;

  if (props.neo.nearEarthObjects) {
    const { nearEarthObjects } = props.neo;
    if (nearEarthObjects.length) {
      neoLength = nearEarthObjects.length;
    }

    const pha = nearEarthObjects.filter(neo => neo.is_potentially_hazardous_asteroid === 'true');
    phaLength = pha.length;
  }

  return (
    <div className="home-view">
      <div>
        There are {neoLength} near earth objects.
      </div>
      <div>
        {phaLength} of those are potentially hazardous asteroids.
      </div>
    </div>
  );
};

export default HomeView;
