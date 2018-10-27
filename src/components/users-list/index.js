import React from 'react';
import cn from 'classnames';
import './style.css';
import { Consumer } from '../../context';

import UsersListItem from '../users-list-item';

export default () => {
  return (
    <Consumer>
      {({ users }) => (
        <ul className={cn('List')}>
          {users.map(item => {
            return (
              <UsersListItem key={item.id} id={item.id}>
                {item.name}
              </UsersListItem>
            );
          })}
        </ul>
      )}
    </Consumer>
  );
};
