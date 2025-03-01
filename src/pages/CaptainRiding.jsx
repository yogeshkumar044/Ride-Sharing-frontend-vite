import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const CaptainRiding = (props) => {
  const [ finishRidePanel, setFinishRidePanel ] = useState(false);
  const finishRidePanelRef = useRef(null);


  useGSAP(function () {
    if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ finishRidePanel ])



  return (
    <div className='h-screen '>
        <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-Home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-2xl font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
    
        </div>
        <div className='h-1/5  bg-yellow-400 flex items-center justify-between relative '
          onClick={() => {
            setFinishRidePanel(true)
          }}
        >
          <h5 onClick={()=>{
            
          }} className=' text-center w-full absolute top-0 '><i className='text-white text-3xl  ri-arrow-down-wide-line'></i></h5>
          <h4 className=' p-3 text-xl font-semibold'>4 KM away</h4>
          <button className=' bg-green-600 text-white font-semibold p-2 px-10 rounded-lg absolute right-3 ' >Complete Ride</button>
        </div>
        <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide
                    setFinishRidePanel={setFinishRidePanel} />
            </div>
    </div>
  )
}

export default CaptainRiding
