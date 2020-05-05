import React from 'react';
import { useSelector } from 'react-redux';
import { Paperclip as PaperclipIcon } from 'react-feather';

import { getBlockstackAvatarUrl } from '../../../store/user/selectors';

import userImg from '../../../images/user.png';
import { Button, Icon, UserPic } from './styled';

const Avatar: React.FC = () => {
  const avatarUrl = useSelector(getBlockstackAvatarUrl);

  return (
    <Button type="button">
      <Icon>
        <PaperclipIcon />
      </Icon>
      <UserPic avatarUrl={avatarUrl || userImg} />
    </Button>
  );
};

export default Avatar;
