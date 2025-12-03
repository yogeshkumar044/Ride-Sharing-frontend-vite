import React from 'react';
import { Link, useLocation } from 'react-router-dom' ;

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-2xl font-medium ri-home-4-line"></i>
        </Link>
        <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/Sarthi-challenge.jpg" alt="" />
    
        </div>
        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
            <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUvuO4GuIhFMQqlC3MY8cyZlNTAEwcgLqfcmwdZBD1qsqFnP-FZSdElsZOAqt_pQqBPg&usqp=CAU" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Yogesh</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1 '>RJ01 AB 0915</h4>
                <p className='text-sm text-gray-600'>Bajaj Pulser 150cc</p>
            </div>
            </div>

            <div className='flex gap-4 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
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
            
            </div> 
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Make a payment</button>
        </div>
      
    </div>
  )
}

export default Riding
