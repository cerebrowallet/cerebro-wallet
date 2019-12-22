import styled from 'styled-components';

import IconButton from '../../shared/IconButton/IconButton';

export const ActionButton = styled(IconButton)`
  &.active,
  &:hover {
    background: #f1f1f1;
  }
`;
