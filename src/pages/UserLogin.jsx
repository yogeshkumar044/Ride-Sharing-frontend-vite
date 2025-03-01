import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;
console.log(apiUrl)
const UserLogin = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = usernameOrEmail.includes('@')
      ? { email: usernameOrEmail, password }
      : { username: usernameOrEmail, password };

    try {
      const response = await axios.post(`${apiUrl}/users/login`, userData);

      if (response.status === 200) {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('token', token);
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setPassword('');
      setUsernameOrEmail('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h2>
        <p className="text-gray-600 text-center">Please login to your account</p>
        {errorMessage && (
          <div className="text-red-600 text-center font-semibold">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="usernameOrEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              placeholder="Enter your username or email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="pt-8">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-center">
          New here?{' '}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Create a new account
          </Link>
        </p>
        <div className="pt-6 text-center">
          <Link
            to="/captain-login"
            className="block py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
