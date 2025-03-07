import React from 'react'

const LookingForDriver = (props) => {
    return (
    <div>
        <h5 onClick={()=>{
         props.setVehicleFound(false);
        }} className='p-1 text-center w-[93%] absolute top-0 '><i className=' text-xl  ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-3xl font-semibold mb-5'>Looking for a Driver</h3>
        <div className='flex gap-4 justify-between flex-col items-center'>
            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUvuO4GuIhFMQqlC3MY8cyZlNTAEwcgLqfcmwdZBD1qsqFnP-FZSdElsZOAqt_pQqBPg&usqp=CAU" alt="" />
            <div className='w-full mt-5'>
            {props.otp && (
                <div className="mt-1 p-1 bg-gray-100 rounded-lg text-center">
                    <h3 className="text-lg font-bold">Your Ride OTP</h3>
                    <p className="text-3xl font-bold tracking-wider my-2">{props.otp}</p>
                    <p className="text-sm text-gray-600">Share this OTP with your driver</p>
                </div>
)}
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>536/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>{props.pickup}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>536/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>{props.destination}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                    <i className="text-lg ri-currency-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{props.fare[props.vehicleType]}</h3>
                        <p className='text-sm text-gray-600 -mt-1 '>Cash Cash</p>
                    </div>
                </div>
            </div>
        
        </div>      
    </div>
    )
}

export default LookingForDriver