import React from 'react';
import cn from 'classnames';
import './style.css';
import { Consumer } from '../../context';

export default ({ id, name, children }) => {
  return (
    <Consumer>
      {({ showUserInfo }) => (
        <li className={cn('List__item')} onClick={() => showUserInfo(id)}>
          {children}
        </li>
      )}
    </Consumer>
  );
};
