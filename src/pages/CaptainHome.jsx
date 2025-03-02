import React ,{useEffect, useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom' ;
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import CaptainDetails from '../components/CaptainDetails';


const CaptainHome = () => {
  const [ ridePopupPanel, setRidePopupPanel ] = useState(false)
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
    <div className='h-screen max-w-7xl w-xl bg-white'>
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
            <CaptainDetails />
        </div>
        <div ref={ridePopupPanelRef} className='fixed w-full max-w-sm z-10 bottom-0 translate-y-full bg-white  px-3 py-10 pt-12'>
          <RidePopUp   setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>
        <div ref={confirmRidePopupPanelRef} className='fixed w-full max-w-sm  h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
             <ConfirmRidePopUp ride={ride} setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
        </div>
      
    </div>
  )
}

export default CaptainHome
