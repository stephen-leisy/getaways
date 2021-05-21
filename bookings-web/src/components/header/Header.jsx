import React, { useState } from 'react';
import { signUpUser } from '../../services/usersApi';
import SignUp from '../auth/SignUp';

export default function Header() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState({});

  const handleChange = ({ target }) => {
    if (target.name === 'user') {
      setUser(target.value);
    } else if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };
  const handleSubmit = async () => {
    const body = {
      username: user,
      email,
      password,
    };
    const response = await signUpUser(body);
    setRes(response);
  };
  console.log(res);
  return (
    <header>
      <SignUp onSubmit={handleSubmit} onChange={handleChange} />
    </header>
  );
}
