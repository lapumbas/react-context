import { createContext } from 'react';

export const { Provider, Consumer } = createContext({
  users: [],
  userInfo: [],
  getUsers: () => {},
  showUserInfo: () => {},
});
