import React, { useState, useEffect } from 'react';
import LogIn from '../components/auth/LogIn';
import { logInUser } from '../services/usersApi';

export default function LogInContainer() {
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
    const { token } = await logInUser(email, password);
    localStorage.setItem('TOKEN', token);
    console.log(token);
  };
  console.log(
    // 'res',
    // user,
    'token',
    token,
    'email',
    email,
    'password',
    password
  );
  return (
    <div>
      <LogIn onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
}
