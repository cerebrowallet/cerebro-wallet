import React from 'react';
import { Paperclip as PaperclipIcon } from 'react-feather';

import { Container, Icon, AvatarContainer } from './styled';

import Avatar from '../../../../components/shared/Avatar/Avatar';

const ProfileAvatar: React.FC = () => {
  return (
    <Container type="button">
      <Icon>
        <PaperclipIcon />
      </Icon>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </Container>
  );
};

export default ProfileAvatar;
