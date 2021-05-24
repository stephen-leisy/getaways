import React from 'react';
import LogOut from '../components/auth/LogOut';
import { logOutUser } from '../services/usersApi';

export default function LogOutConatainer() {
  const handleClick = async () => {
    const res = await logOutUser();
    console.log(res);
  };
  return <LogOut onClick={handleClick} />;
}
