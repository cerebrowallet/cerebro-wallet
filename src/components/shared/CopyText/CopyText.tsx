import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { NotificationTypes } from '../../../dictionaries';
import { Container, CopyIcon } from './styled';

import { showNotification } from '../../../store/layout/actions';

interface Props {
  value: string;
  children?: React.ReactNode;
}

const Hash: React.FC<Props> = ({ value, children }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onClick={() => {
        navigator.clipboard.writeText(value);
        dispatch(
          showNotification({
            type: NotificationTypes.Default,
            text: 'Copied to Clipboard.',
          })
        );
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CopyIcon isHovered={isHovered} />
      {children}
    </Container>
  );
};

export default Hash;
