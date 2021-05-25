export const signUpUser = async (body) => {
  const user = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await user.json();
  console.log('api', json);
  return json;
};

export const logInUser = async (email, password) => {
  const user = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await user.json();
  console.log(json);
  return json;
};

export const logOutUser = async () => {
  const res = await fetch(`${process.env.BASE_URL}/users/logout`, {
    method: 'GET',
  });
  const json = await res.json();
  console.log(json);
};
