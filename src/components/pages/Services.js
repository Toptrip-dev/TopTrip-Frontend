import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function Services() {
  return (
    <div className="flex justify-center bg-slate-100 h-screen">
  <div className="flex flex-col p-4 gap-4">
    <h1 className="font-semibold text-2xl">Let's Plan you a TopTrip!</h1>
    <form className="flex flex-col p-3 gap-6 text-lg">
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Your location"
      />
      <i className='fab fa-strava self-center'></i>
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Search Region or Place"
      />
      <h2 className="text-gray-890 font-pontiac">Customize your way</h2>
      <div className="shadow-lg text-sm text-gray-500 bg-white rounded p-2">
        <p className="text-base mb-3">Budget: 200 - 1000 Rs</p>
        <div className="flex">
          <p className="w-8">Min</p>
          <input type="range" />
        </div>
        <div className="flex">
          <p className="w-8">Max</p>
          <input type="range" />
        </div>
      </div>
      <div className="shadow-lg text-sm text-gray-500 bg-white rounded">
        <div className="border-b-[1px] border-gray-400 p-2">
          <p className="text-base">Select experiences</p>
        </div>
        <div className="flex gap-2 flex-wrap max-w-sm p-2">
          <span className="shadow-lg border-2 border-gray-10 px-2 rounded-full">
            Trek
          </span>
          <span className="shadow-lg border-2 border-gray-10 px-2 rounded-full">
            Water Sport
          </span>
          <span className="shadow-lg border-2 border-gray-10 px-2 rounded-full">
            Hill top
          </span>
          <span className="shadow-lg border-2 border-gray-10 px-2 rounded-full">
            Sunset Point
          </span>
          <span className="shadow-lg border-2 border-gray-10 px-2 rounded-full">
            River View Point
          </span>
        </div>
      </div>
    </form>
  <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Plan Now</button>
  </div>
  </div>
</div>
  )
}