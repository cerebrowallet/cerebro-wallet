import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  background: ${colors.white};
  padding: 3.75rem 1.25rem 1.5625rem;
  border-radius: 1.25rem;
  text-align: center;
  margin: 3.75rem 1.25rem 1.25rem;

  @media (min-width: ${Breakpoints.md}px) {
    margin: 0 0.625rem 0 0;
    max-width: 17.5rem;
  }
`;

export const TopCircle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -2.25rem;
  width: 72px;
  height: 72px;
  background: ${colors.black};
  border-radius: 100%;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.white};
    display: block;
    content: '';
    width: 51px;
    height: 51px;
  }

  #cerebro-icon-ring {
    fill: ${colors.white};
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${colors.gray};
  margin-bottom: 1.25rem;
`;
