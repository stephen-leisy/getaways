import React from 'react';

export default function SignUp({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Sign Up!</h2>
      <input
        type="text"
        placeholder="User Name"
        name="user"
        // value="nameInput"
        onChange={onChange}
      />

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
