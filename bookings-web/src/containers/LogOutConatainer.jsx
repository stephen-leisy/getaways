import React from 'react';
import LogOut from '../components/auth/LogOut';
import { logOutUser } from '../services/usersApi';

export default function LogOutConatainer({ history, handleToken }) {
  const handleClick = async () => {
    const res = await logOutUser();
    console.log(res);
    localStorage.setItem('TOKEN', '');
    handleToken('');
    history.push('/');
  };
  return (
    <section>
      <LogOut onClick={handleClick} />
    </section>
  );
}
