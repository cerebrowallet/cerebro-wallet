import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Img } from './styled';
import { getProfile } from '../../../store/user/selectors';

import Emoji from './Emoji/Emoji';

const Avatar: React.FC = () => {
  const profile = useSelector(getProfile);

  if (!profile || (!profile.avatarUrl && profile.avatarEmoji === null)) {
    return null;
  }

  return (
    <Container>
      {profile.avatarUrl ? (
        <Img src={profile.avatarUrl} />
      ) : (
        <Emoji emoji={profile.avatarEmoji} />
      )}
    </Container>
  );
};

export default Avatar;
