import React, { useState ,useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const apiUrl = import.meta.env.VITE_BASE_URL;


const UserSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();


  const { user, setUser } = useContext(UserDataContext)


  const submitHandler = async(e) => {
    e.preventDefault();

    const newUser = {
      username:username,
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }



    const response = await axios.post(`${apiUrl}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    // // Reset the form
    // setUsername('');
    // setEmail('');
    // setFirstName('');
    // setLastName('');
    // setPassword('');
    // setConfirmPassword('');
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt="App Logo"
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg w-1/2 font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Choose a Username</h3>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Enter a username"
            />
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-lg font-medium mb-2">Create Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className="text-lg font-medium mb-2">Confirm Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
              type="submit"
            >
              Create account
            </button>
          </form>
          <p className="text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
