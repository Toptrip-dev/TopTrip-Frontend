import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { CgArrowsExchangeV } from 'react-icons/cg';

export default function Services() {
   // Our States
   const [value, setValue] =  React.useState([500,1000]);
  
   // Changing State when volume increases/decreases
   const rangeSelector = (event, newValue) => {
     setValue(newValue);
     console.log(newValue)
   };
  return (

    
    <div className="flex justify-center bg-slate-100 h-screen">
  <div className="flex flex-col p-4 gap-4 min-w-max w-2/3">
    <h1 className="font-semibold text-2xl">Let's Plan you a TopTrip!</h1>
    <form className="flex flex-col p-3 gap-6 text-lg">
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Your location"
      />
     <div class="container w-12 self-center "><CgArrowsExchangeV/></div>
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Search Region or Place"
      />
      <h2 className="text-gray-890 font-pontiac" style={{textAlign:'center'}}>Customize your way</h2>
      <div style={{
      margin: 'auto',
      display: 'block',
      minWidth: 'fit-content',
      width: '3/4'
    }}>
      <h3 style={{textAlign:'center'}}>Customize Your TopTrip</h3>
      <Typography id="range-slider" gutterBottom>
        Select Your Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
      <div className="shadow-lg text-sm text-gray-500 bg-white rounded w-">
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
  <Link to ='/plan'>
    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Plan Now</button>
  </Link>
  </div>
  </div>
</div>
  )
}