import React from 'react';

// const NeoList = (nearEarthObjects) => {
// console.log(nearEarthObjects, 'NEO');
const NeoList = ({ neo }) => {
  const list = () => (
    <div>
      {neo.map(neo => (
        <div>
          {neo.name}
        </div>
        ))}
    </div>
  );

  return (
    <div className="neo-list">
      {list()}
    </div>
  );
};

export default NeoList;
