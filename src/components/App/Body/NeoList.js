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
        } = asteroid;

        return (
          <li key={neoId}>
            <a href={url}> {name} </a>
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
