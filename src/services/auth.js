const usersKey = 'users';
const authKey = 'auth';

export const registerUser = (username, password) => {
  let users = JSON.parse(localStorage.getItem(usersKey)) || [];
  if (users.find(user => user.username === username)) {
    throw new Error('User already exists');
  }
  users.push({ username, password });
  localStorage.setItem(usersKey, JSON.stringify(users));
};

export const loginUser = (username, password) => {
  let users = JSON.parse(localStorage.getItem(usersKey)) || [];
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  localStorage.setItem(authKey, JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem(authKey);
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(authKey));
};
