import React from 'react';
import styled from 'styled-components';
import { Paperclip as PaperclipIcon } from 'react-feather';
import userImg from '../../images/user.png';

const Button = styled.button`
  position: relative;
  width: 8rem;
  height: 8rem;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 100%;
  border: 0;
  margin-bottom: 3.125rem;
`;

const Icon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  background: ${props => props.theme.colors.primary};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.7rem;
    height: 0.7rem;
    color: #fff;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
  height: 4rem;
`;

const Avatar: React.FC = () => {
  return (
    <Button type="button">
      <Icon>
        <PaperclipIcon />
      </Icon>
      <Img src={userImg} alt="" />
    </Button>
  );
};

export default Avatar;
