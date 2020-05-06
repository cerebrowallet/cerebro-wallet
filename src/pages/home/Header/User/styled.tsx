import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:visited, &:focus, &:active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const UserProfileLink = styled.span`
  position: relative;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 100%;
  margin-right: 0.938rem;
  overflow: hidden;
`;

export const UserPic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const UserName = styled.div`
  font-size: 0.875rem;

  strong {
    font-weight: 600;
  }
`;