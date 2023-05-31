import React from 'react';
import Carousel from '../Carousel';
import MapComponent from './MapComponent';
import Place_card from './Place_card';
import './styles.css'


export default function Plan() {
  return (
    <> 
      <div className='p-5'>
      <MapComponent/>
      </div>
        <Place_card/>
        <Carousel/>
    </>
  );
}



