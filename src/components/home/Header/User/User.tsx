import React from 'react';
import { useSelector } from 'react-redux';

import {
  getBlockstackUsername,
  getBlockstackAvatarUrl,
  getBlockStackName,
} from '../../../../store/user/selectors';

import userImage from '../../../../images/user.png';
import { UserContainer, UserProfileLink, UserPic, UserName } from './styled';

const User: React.FC = () => {
  const avatarUrl = useSelector(getBlockstackAvatarUrl);
  const username = useSelector(getBlockstackUsername);
  const name = useSelector(getBlockStackName);

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
