import React from 'react';
import PropTypes from 'prop-types';

const NeoList = ({ neo }) => (
  <div className="neo-list">
    <ul>
      {neo.map((asteroid) => {
        const {
          name,
          estimated_diameter: estimatedDiameter,
          is_potentially_hazardous_asteroid: isPHA,
          nasa_jpl_url: url,
          neo_reference_id: neoId,
          close_approach_data: closeApproachData,
        } = asteroid;

        const {
          estimated_diameter_max: estDiaMax,
          estimated_diameter_min: estDiaMin,
        } = estimatedDiameter.meters;

        const relativeVelocity = closeApproachData[0].relative_velocity;
        const kph = relativeVelocity.kilometers_per_second;

        const twoDec = num => Math.round(num * 100) / 100;

        return (
          <li key={neoId}>
            {name}
            {twoDec(estDiaMax)} meters wide, travelling at {twoDec(kph)} km/s
            <a
              href={url}
            >
            +
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

NeoList.propTypes = {
  neo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NeoList;
