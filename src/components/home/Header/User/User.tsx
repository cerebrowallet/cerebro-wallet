import React from 'react';

import userImage from '../../../../images/user.png';
import { UserContainer, UserProfileLink, UserPic, UserName } from './styled';

const User: React.FC = () => {
  return (
    <UserContainer>
      <UserProfileLink to="/profile">
        <UserPic src={userImage} alt="" />
      </UserProfileLink>
      <UserName>
        Hello, <strong>Eugene</strong>
      </UserName>
    </UserContainer>
  );
};

export default User;
