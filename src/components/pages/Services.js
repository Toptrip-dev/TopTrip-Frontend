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
  <div className="flex flex-col p-2 gap-5 min-w-max w-2/3">
    <p className="font-semibold text-4xl p-4 text-red-500/80" >Let's Plan you a TopTrip!</p>
    <form className="flex flex-col p-2 gap-3 text-lg justify-center">
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Your location"
      />
     <div class="container w-12 self-center "><CgArrowsExchangeV style ={{width:'2.5rem', height:'2.5rem'}}/></div>
      <input
        type="text"
        className="rounded-full p-1 px-4"
        placeholder="Search Region or Place"
      />
      <div className ='flex h-1  bg-white mt-4 shadow-lg justify-center'></div>
      <h2 className="text-gray-890 font-pontiac p-2 text-center text-2xl" >Customize your way</h2>
      <div style={{
      margin: '0rem 2rem',
      display: 'block',
      minWidth: 'fit-content',
      width: '3/4'
    }}>
      <Typography id="range-slider" className=' text-3xl text-center' gutterBottom>
        Select Your Price Range:
      </Typography>
      <Slider
      style={{color:'#ff735c'}}
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your Price is between {value[0]} /- and {value[1]} /-
    </div>
      <div className="shadow-lg text-sm text-gray-500 bg-white rounded ">
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
  <div class="flex space-x-2 justify-center pt-2">
  <Link to ='/plan'>
    <button style={{backgroundColor:'#ff735c'}} class=" h-12 w-48 inline-block px-6 py-2.5 bg-orange-default before:text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-orange-default hover:shadow-lg focus:bg-orange-default focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-default active:shadow-lg transition duration-150 ease-in-out">Plan Now</button>
  </Link>
  </div>
  </div>
</div>
  )
}