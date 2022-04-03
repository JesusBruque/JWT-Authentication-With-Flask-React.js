const URL =
  "https://3001-jesusbruque-jwtauthentic-rj20qw0yjf5.ws-eu38.gitpod.io";

export const loginUser = (user) => {
  return fetch(`${URL}/api/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const registerUser = (user) => {
  return fetch(`${URL}/api/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
