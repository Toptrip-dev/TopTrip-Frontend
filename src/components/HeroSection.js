import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className='topcontainer'>
    <p className='text-center text-3xl'>Going For A Trip ?</p>
    </div>
    <div className='topcontainer'>
    <p className='text-center text-5xl text-red-500/80'>Go Hassle Free With TopTrip!!</p>
    </div>
    <div className='hero-container'>
    </div>
    <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'

        >
          Plan Trip Now!!
        </Button>
      </div>
  </>
  );
}

export default HeroSection;
