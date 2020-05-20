import styled from 'styled-components';
import { animated } from 'react-spring';

import { Statuses } from '../../../dictionaries';
import { Theme } from '../../../utils/styled';

export const Container = styled.div`
  position: relative;
  margin-bottom: 0.625rem;
`;

export const Button = styled(animated.button)`
  position: absolute;
  top: 0.3125rem;
  right: 0.3125rem;
  border: 0;
  background: ${(props) => props.theme.colors.secondaryLight};
  color: ${(props) => props.theme.colors.primary};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 0.375rem;
  padding: 0;
  transition: background-color 0.2s ease-in;

  &:focus {
    outline: none;
  }

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface SubscribeStatusProps {
  status?: Statuses;
  theme?: Theme;
}

export const SubscribeStatus = styled(animated.div)`
  position: absolute;
  top: 100%;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  margin-top: 0.125rem;
  color: ${(props: SubscribeStatusProps) => {
    if (!props.theme) {
      return null;
    }

    if (props.status === Statuses.Success) {
      return props.theme.colors.green;
    }

    if (props.status === Statuses.Fail) {
      return props.theme.colors.red;
    }

    return props.theme.colors.primary;
  }};
`;
