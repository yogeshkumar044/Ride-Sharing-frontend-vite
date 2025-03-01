import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
         props.setWaitingForDriver(false)
        }} className='p-3 text-center w-[90%] absolute top-0 '><i className=' text-xl  ri-arrow-down-wide-line'></i></h5>

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
        
        </div>      
    </div>
  )
}

export default WaitingForDriver