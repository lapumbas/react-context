import React from 'react';
import cn from 'classnames';
import './style.css';
import { Consumer } from '../../context';

export default () => {
  return (
    <Consumer>
      {({ userInfo }) => (
        <ul className={cn({ UserInfoList: true })}>
          {userInfo.map((item, i) => (
            <li className={cn({ UserInfoList__item: true })} key={i}>{`${item.key}: ${item.data}`}</li>
          ))}
        </ul>
      )}
    </Consumer>
  );
};
