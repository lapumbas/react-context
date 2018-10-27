import React, { PureComponent } from 'react';
import axios from 'axios';
import './App.css';
import { Provider } from './context';

import Button from './components/button';
import UsersList from './components/users-list';
import UserInfo from './components/user-info';

class App extends PureComponent {
  state = {
    users: [],
    userInfo: []
  };

  getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      const users = response.data;
      this.setState({ users });
    });
  };

  showUserInfo = id => {
    const users = this.state.users;
    const userInfo = this.objectToArray(users.filter(item => item.id === id)[0]);
    this.setState({ userInfo });
  };

  objectToArray = object => {
    const arr = [];
    const arrUserInfo = obj => {
      for (let key in obj) {
        if (obj[key] instanceof Object) {
          return arrUserInfo(obj[key]);
        }
        arr.push({ key: key, data: obj[key] });
      }
    };
    arrUserInfo(object);
    return arr;
  };

  render() {
    return (
      <div className="App">
        <Provider
          value={{
            users: this.state.users,
            userInfo: this.state.userInfo,
            getUsers: this.getUsers,
            showUserInfo: this.showUserInfo
          }}
        >
          <Button name={'Get Users'} />
          <UsersList />
          <UserInfo />
        </Provider>
      </div>
    );
  }
}

export default App;
