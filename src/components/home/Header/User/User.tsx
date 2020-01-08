import React from 'react';
import { useSelector } from 'react-redux';

import {
  getUserName,
  getAvatarUrl,
  getName,
} from '../../../../store/user/selectors';

import userImage from '../../../../images/user.png';
import { UserContainer, UserProfileLink, UserPic, UserName } from './styled';

const User: React.FC = () => {
  const name = useSelector(getName);
  const username = useSelector(getUserName);
  const avatarUrl = useSelector(getAvatarUrl);

  return (
    <UserContainer>
      <UserProfileLink to="/profile">
        <UserPic src={avatarUrl || userImage} alt={name || username} />
      </UserProfileLink>
      <UserName>
        Hello, <strong>{name || username}</strong>
      </UserName>
    </UserContainer>
  );
};

export default User;
