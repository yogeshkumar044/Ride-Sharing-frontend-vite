import React from 'react';

const VehiclePanel = (props) => {
    console.log(props)
    const formatTime = (seconds) => {
        if (!seconds) return "N/A";
        if (seconds < 60) {
            return `${seconds} sec`;
        } else if (seconds < 3600) {
            return `${Math.ceil(seconds / 60)} min`;
        } else if (seconds < 86400) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.ceil((seconds % 3600) / 60);
            return minutes > 0 ? `${hours} hr ${minutes} min` : `${hours} hr`;
        } else {
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            return hours > 0 ? `${days} d ${hours} hr` : `${days} d`;
        }
    };

    if (!props || !props.fare) {
        return <h3 className="text-center text-lg font-semibold">No data available</h3>;
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h5 className='p-1 text-center w-full absolute top-0 cursor-pointer' 
                onClick={() => props.setVehiclePanel?.(false)}>
                <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5 text-center'>Choose a Vehicle</h3>

            {/* UberGo */}  
            <div 
                onClick={() => {
                    props.setConfirmRidePanel?.(true);
                    props.selectVehicle?.('car');
                }} 
                className='flex border-2 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer transition'>
                <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="UberGo" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className="font-medium text-sm">{formatTime( props.fare?.time ?? "N/A" )} away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare?.car ?? "N/A"}</h2>
            </div>

            {/* Moto */}
            <div 
                onClick={() => {
                    props.setConfirmRidePanel?.(true);
                    props.selectVehicle?.('moto');
                }} 
                className='flex border-2 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer transition'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Moto" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className="font-medium text-sm">{formatTime( props.fare?.time ?? "N/A" )} away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare?.moto ?? "N/A"}</h2>
            </div>

            {/* UberAuto */}
            <div 
                onClick={() => {
                    props.setConfirmRidePanel?.(true);
                    props.selectVehicle?.('auto');
                }} 
                className='flex border-2 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer transition'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="UberAuto" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className="font-medium text-sm">{formatTime( props.fare?.time ?? "N/A" )} away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare?.auto ?? "N/A"}</h2>
            </div>
        </div>
    );
};

export default VehiclePanel;
