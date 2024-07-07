import React from 'react';

function AboutComponent({ refProp }) {
  return (
    <div ref={refProp} id="about">
      Index of About
    </div>
  );
}

export default AboutComponent;
