import React from 'react';
import { X as CloseIcon } from 'react-feather';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import CircleButton from './CircleButton';

const ButtonWrapper = styled(CircleButton)`
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
  z-index: 100;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 2.625rem;
    right: 1.25rem;
  }
`;

interface Props {
  className?: string;
}

const CornerCloseButton: React.FC<Props> = ({ className }) => {
  const history = useHistory();

  return (
    <ButtonWrapper onClick={() => history.push('/')} className={className}>
      <CloseIcon />
    </ButtonWrapper>
  );
};

export default CornerCloseButton;
