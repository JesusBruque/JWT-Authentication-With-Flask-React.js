const URL =
  "https://3001-jesusbruque-jwtauthentic-prhc1ofv7ii.ws-eu38.gitpod.io";

export const loginUser = (user) => {
  return fetch(`${URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const registerUser = (user) => {
  return fetch(`${URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application / json",
    },
    body: JSON.stringify(user),
  });
};
