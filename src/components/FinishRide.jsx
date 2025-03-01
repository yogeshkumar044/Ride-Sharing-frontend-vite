import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const FinishRide = (props) => {
  return (
    <div className=''>
        <h5 onClick={()=>{
         props.setFinishRidePanel(false);
        }} className='p-3 text-center w-[90%] absolute top-0 '><i className=' text-xl  ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-4 border-2  border-yellow-500 rounded-lg mt-3 '>
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
            <div className='w-full'>            
                        <Link to='/captain-Home' className=' bg-green-600 text-lg flex justify-center text-white font-semibold p-2 rounded-lg '>Finish Ride</Link>
            </div>
        
        </div>      
    </div>
  )
}

export default FinishRide
