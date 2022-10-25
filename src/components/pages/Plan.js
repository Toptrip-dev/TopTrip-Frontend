import React from 'react';
import SimpleMap from './map';
import Place_card from './Place_card';
import './plan.css';

function Plan() {
  return (
  <>
  <div className='map-container'>
    <SimpleMap/>
  </div>
  <Place_card/>
  </>
  );
}

export default Plan


