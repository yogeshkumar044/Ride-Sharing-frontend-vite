import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride



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
      <div className='h-screen w-full relative flex flex-col justify-between'>
          <div className='absolute inset-0 z-0'>
              <LiveTracking />
          </div>
  
          <div className='relative z-10 p-6 flex items-center justify-end w-full'>
              <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md'>
                  <i className="text-lg font-medium ri-logout-box-r-line"></i>
              </Link>
          </div>
  
          <div className='relative z-10 mt-auto p-6 flex items-center justify-between bg-yellow-400 pt-10'
              onClick={() => setFinishRidePanel(true)}
          >
              <h5 className='p-1 text-center w-full absolute top-0'>
                  <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
              </h5>
              <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
              <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>
                  Complete Ride
              </button>
          </div>
  
          {/* Finish ride panel */}
          <div ref={finishRidePanelRef} className='fixed w-full left-0 right-0 z-20 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 rounded-t-3xl shadow-lg'>
              <FinishRide
                  ride={rideData}
                  setFinishRidePanel={setFinishRidePanel} 
              />
          </div>
      </div>
  )
}

export default CaptainRiding