import React from 'react';

export default function LogOut({ onClick }) {
  return (
    <div>
      <h1>Are you sure you'd like to log out?</h1>
      <button onClick={onClick}>LOG OUT</button>
    </div>
  );
}
