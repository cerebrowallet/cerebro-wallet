import React from 'react';
import { Paperclip as PaperclipIcon } from 'react-feather';

import userImg from '../../../images/user.png';
import { Button, Icon, Img } from './styled';

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
