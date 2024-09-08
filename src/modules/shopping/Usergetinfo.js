import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for cookie handling
import { backendurl } from '../../Servicepage';

const Usergetinfo = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the token from cookies
        const token = Cookies.get('token');
        if (!token) {
          setError('No authentication token found.');
          setLoading(false);
          return;
        }

        // Make a GET request to fetch user information
        const response = await axios.get(`${backendurl}/userinfo`, {
          headers: {
            'Authorization': `Bearer ${token}` // Include token in headers
          }
        });

        setUser(response.data.user);
      } catch (err) {
        // Handle errors and update the state
        setError('Failed to fetch user information');
      } finally {
        // Set loading to false after request completion
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Render loading state
  if (loading) return <p>Loading...</p>;

  // Render error state
  if (error) return <p>{error}</p>;

  // Render user information if available
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-sm-8 p-3'>
          <div className='container-fluid border p-5 bg-light shadow rounded-5 animate__animated animate__bounceIn'>
            <div className='row'>
              {user ? (
                <div>
                  <h1>{user.fullname}</h1>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Date of Birth: {user.dob}</p>
                  <p>State: {user.state}</p>
                  {/* Add or remove fields as needed */}
                </div>
              ) : (
                <p>No user data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usergetinfo;
