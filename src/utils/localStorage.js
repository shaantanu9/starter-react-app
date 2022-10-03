export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(token);
  }
  return null;
};

export const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};
