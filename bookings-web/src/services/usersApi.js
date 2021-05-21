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
