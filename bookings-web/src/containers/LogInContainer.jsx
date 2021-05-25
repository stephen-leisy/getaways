import React, { useState, useEffect } from 'react';
import LogIn from '../components/auth/LogIn';
import { logInUser } from '../services/usersApi';

export default function LogInContainer({ history, handleToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState({});

  function handleChange({ target }) {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await logInUser(email, password);
    localStorage.setItem('TOKEN', user._id);
    handleToken(user._id);
    history.push('/places');
  };

  return (
    <div>
      <LogIn onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
}
