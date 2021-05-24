import React from 'react';

export default function LogIn({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <h1>Log In!</h1>
      <input
        type="text"
        placeholder="Email"
        name="email"
        // value="emailInput"
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Password"
        name="password"
        // value="passwordInput"
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  );
}
