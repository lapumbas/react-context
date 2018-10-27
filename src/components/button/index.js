import React from 'react';
import cn from 'classnames';
import './style.css';
import { Consumer } from '../../context';

export default ({ name }) => {
  return (
    <Consumer>
      {({ getUsers }) => <button className={cn({ Button: true })} onClick={getUsers}>{name}</button>}
    </Consumer>
  );
};
