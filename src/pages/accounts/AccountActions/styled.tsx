import styled from 'styled-components';

import IconButton from '../../../components/shared/IconButton/IconButton';

export const ActionButton = styled(IconButton)`
  &.active,
  &:hover {
    background: ${(props) => props.theme.colors.secondaryLight};
  }
`;
