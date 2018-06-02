import React from 'react';
import { Icon } from 'semantic-ui-react';

const APODcard = ({ data }) => {
  const {
    copyright,
    date,
    explanation,
    title,
    url,
  } = data;

  return (
    <div className="APOD">
      <img src={url} />
      <div className="APODtext">
        <div>
          {title} - {date} - <Icon name="camera retro" /> by {copyright}
          <div className="APODexplanation">
            {explanation}
          </div>

        </div>
      </div>
    </div>
  );
};

export default APODcard;
