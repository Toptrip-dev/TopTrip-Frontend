import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import HelperCards from './HelperCards';

function Benefits() {
  return (
    <div className='help'>
      <h1 style={{fontSize:'30px'}}>Why Choose Us ?</h1>
      <div className='help__container'>
        <div className='help__wrapper'>
          <ul className='cards__items'>
            <HelperCards
              src='images/help-2.png'
              text='Get A Complete Planned Trip'
              path='/'
            />
            <HelperCards
              src='images/help-1.jpg'
              text='Save Money And Time'
              path='/'
            />
            <HelperCards
              src='images/help-3.png'
              text='Relax,Enjoy And be Stress Free'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
