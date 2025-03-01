import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ConfirmRidePopUp = (props) => {
    const [ otp, setOtp ] = useState('')
    const navigate = useNavigate()

    const submitHander = async(e)=>{
        e.preventDefault();
    }

  return (
    <div className=''>
        <h5 onClick={()=>{
         props.setConfirmRidePopupPanel(false);
        }} className='p-3 text-center w-[90%] absolute top-0 '><i className=' text-xl  ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-500 rounded-lg mt-3 '>
            <div className='flex items-center gap-3  '>
                <img className='h-10 w-10 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRsW89Rhg1lUDnG6DTuQHdVRn4Z5nQmPjww&s" alt="" />
                <h2 className='text-lg font-medium '>Passenger's Name</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
        <div className='flex gap-4 justify-between flex-col items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>536/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>beawar Road, Ajmer</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>536/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>beawar Road, Ajmer</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                    <i className="text-lg ri-currency-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>$19.27</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <form onSubmit={submitHander}>
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} className='bg-[#eee] text-gray-700 px-12 py-2 text-base rounded-lg w-2/3 ml-[16.8%] ' type="text" placeholder='Enter OTP' />
                    <div className='flex items-center justify-between gap-0 w-full mt-5'>
                        <Link to='/captain-riding' className='w-full m-3 text-lg bg-green-600 flex justify-center text-white font-semibold p-2 rounded-lg '>Confirm</Link>
                        <button onClick={()=>{
                            props.setConfirmRidePopupPanel(false);
                            props.setRidePopupPanel(false);
                        }} className='w-full m-3 text-lg bg-red-700 text-white font-semibold p-2 rounded-lg '>cancel</button>
                    </div>
                </form>
            </div>
        
        </div>      
    </div>
  )
}

export default ConfirmRidePopUp
