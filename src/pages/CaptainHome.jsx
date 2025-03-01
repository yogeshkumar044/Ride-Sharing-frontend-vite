import React ,{useEffect, useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom' ;
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';


const CaptainHome = () => {
  const [ ridePopupPanel, setRidePopupPanel ] = useState(true)
  const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)
  const [ ride, setRide ] = useState(null)




  useGSAP(function () {
    if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ ridePopupPanel ])

useGSAP(function () {
    if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ confirmRidePopupPanel ])



  return (
    <div className='h-screen '>
        <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-Home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-2xl font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
    
        </div>
        <div className='h-2/5 p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmM0S1dDiKNr4i0nmQm9tMcSvjjexqc0qOg&s" alt="" />
              <h4 className='text-lg font-medium'>Driver's Name</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>$20.3</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>

          </div>
        </div>
        <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 px-3 py-8  bg-white pt-12'>
          <RidePopUp   setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>
        <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
             <ConfirmRidePopUp ride={ride} setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
        </div>
      
    </div>
  )
}

export default CaptainHome
