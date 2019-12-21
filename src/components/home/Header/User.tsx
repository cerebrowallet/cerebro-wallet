import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import userImage from '../../../images/user.png';

const StyledUser = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatarLink = styled(Link)`
  position: relative;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 100%;
  margin-right: 0.938rem;
  overflow: hidden;
`;

const UserAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.5rem;
  height: 1.5rem;
`;

const UserName = styled.div`
  font-size: 0.875rem;
  
  strong {
    font-weight: 600;
  }
`;

const User: React.FC = () => {
  return (
    <StyledUser>
      <UserAvatarLink to="/profile">
        <UserAvatar src={userImage} alt="" />
      </UserAvatarLink>
      <UserName>
        Hello, <strong>Eugene</strong>
      </UserName>
    </StyledUser>
  );
};

export default User;
