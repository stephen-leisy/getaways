import { nominalTypeHack } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ token }) {
  return (
    <header>
      <NavLink to="/" exact activeClassName="hidden">
        <img
          src="https://img.icons8.com/nolan/64/home.png"
          style={{ boxShadow: 'none', border: 'none' }}
        />
      </NavLink>

      {token ? (
        <NavLink to="/places" exact>
          <h1>Getaways</h1>
        </NavLink>
      ) : (
        <NavLink to="/login">
          <h1>Getaways</h1>
        </NavLink>
      )}

      <div>
        {token ? (
          <NavLink to="/logout" exact activeClassName="hidden">
            <img
              src="https://img.icons8.com/nolan/64/exit.png"
              style={{ boxShadow: 'none', border: 'none' }}
            />
          </NavLink>
        ) : (
          <>
            <NavLink to="/signup" exact activeClassName="hidden">
              <img
                src="https://img.icons8.com/nolan/64/sign-up.png"
                style={{ boxShadow: 'none', border: 'none' }}
              />
            </NavLink>
            <NavLink to="/login" exact activeClassName="hidden">
              <img
                src="https://img.icons8.com/nolan/64/forgot-password.png"
                style={{ boxShadow: 'none', border: 'none' }}
              />
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
