import { nominalTypeHack } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/" exact activeClassName="hidden">
        <img
          src="https://img.icons8.com/nolan/64/home.png"
          style={{ boxShadow: 'none' }}
        />
      </NavLink>
      <h1>Getaways</h1>
      <div>
        <NavLink to="/signup" exact activeClassName="hidden">
          <img
            src="https://img.icons8.com/nolan/64/sign-up.png"
            style={{ boxShadow: 'none' }}
          />
        </NavLink>
        <img
          src="https://img.icons8.com/nolan/64/forgot-password.png"
          style={{ boxShadow: 'none' }}
        />
        <img
          src="https://img.icons8.com/nolan/64/exit.png"
          style={{ boxShadow: 'none' }}
        />
      </div>
    </header>
  );
}
