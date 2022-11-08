import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{fontSize: 50}}>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Western Ghats'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Visit the Beautiful Temples of Kadamabh Era'
              label='Religious'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Church'
              label='Catholic'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience The majestic Beaches of Goa'
              label='Beach'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Enjoy the Winds With Taj Beach Resort in Goa'
              label='Relaxing'
              path='/'
            />
          </ul>
        </div>
      </div>
      <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your Planning your Trip Now !!!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <Link to = '/services'>
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          </Link>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
