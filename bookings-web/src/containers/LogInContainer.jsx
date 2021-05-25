import React, { useState } from 'react';
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
    localStorage.setItem('TOKEN', user.token);
    handleToken(user.token);
    console.log('loin', user.token);
    history.push('/places');
  };

  return (
    <section>
      <LogIn onSubmit={handleSubmit} onChange={handleChange} />
    </section>
  );
}
