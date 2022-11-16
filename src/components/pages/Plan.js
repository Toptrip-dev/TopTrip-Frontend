import React from 'react';
import Carousel from '../Carousel';
import SimpleMap from './map';
import Place_card from './Place_card';


export default function Plan() {
  return (
    <>
      <div className=" text-center font-sans text-4xl font-semibold p-1 text-red-500/80 shadow-inner">Your Trip Is Ready !!</div>
      <div className='p-4'>
        <SimpleMap />
        <div className=' pt-4 m-0 '>
          <Place_card />
        </div>
      </div>
      <Carousel />

    </>
  );
}



