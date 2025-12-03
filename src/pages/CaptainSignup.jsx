import React, { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CapatainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const apiUrl = import.meta.env.VITE_BASE_URL;


const CaptainSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');


  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  

  const submitHandler = async(e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    const captainData = {
      username:username,
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${apiUrl}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }


    // Reset fields
    setUsername('');
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-md w-full px-4 py-6 bg-white rounded-lg shadow-md">
        <img
          className="w-20 mb-4 mx-auto"
          src="https://www.svgrepo.com/show/505031/Sarthi-driver.svg"
          alt="Captain Logo"
        />

        <form onSubmit={submitHandler} className="space-y-6">
          <h3 className="text-lg font-medium text-center">Create Your Captain Account</h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <input
                required
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              required
              className="bg-gray-200 w-full rounded-md px-3 py-2 text-sm"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              required
              className="bg-gray-200 w-full rounded-md px-3 py-2 text-sm"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              required
              className="bg-gray-200 w-full rounded-md px-3 py-2 text-sm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <h4 className="text-sm font-medium">Vehicle Details</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                required
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                required
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <input
                required
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                type="number"
                placeholder="Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                required
                className="bg-gray-200 w-1/2 rounded-md px-3 py-2 text-sm"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>
                  Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">MotorBike</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
