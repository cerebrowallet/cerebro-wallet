import React from 'react';
import { useSelector } from 'react-redux';

import { getBlockstackUsername, getBlockstackAvatarUrl } from '../../../../store/user/selectors';

import userImage from '../../../../images/user.png';
import { UserContainer, UserProfileLink, UserPic, UserName } from './styled';

const User: React.FC = () => {
  const avatarUrl = useSelector(getBlockstackAvatarUrl);
  const username = useSelector(getBlockstackUsername);

  if (!avatarUrl || !username) {
    return null;
  }

  return (
    <UserContainer>
      <UserProfileLink to="/profile">
        <UserPic src={avatarUrl || userImage} alt={username} />
      </UserProfileLink>
      <UserName>
        Hello, <strong>{username}</strong>
      </UserName>
    </UserContainer>
  );
};

export default User;
