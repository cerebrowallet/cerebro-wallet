import React from 'react';
import { useSelector } from 'react-redux';

import { getUserName } from '../../../../store/user/selectors';

import Avatar from '../../../../components/shared/Avatar/Avatar';

import { UserContainer, AvatarContainer, UserName } from './styled';

const User: React.FC = () => {
  const username = useSelector(getUserName);

  return (
    <UserContainer to="/profile/details">
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <UserName>
        Hello, <strong>{username}</strong>
      </UserName>
    </UserContainer>
  );
};

export default User;
