import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

export const Wrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.tertiary};
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
  background: ${(props) => props.theme.colors.primary};
  border-radius: 100%;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    content: '';
    width: 51px;
    height: 51px;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1.25rem;
`;
