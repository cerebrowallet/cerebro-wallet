import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';
import { Theme } from '../../../styles/types';

export const Container = styled.div`
  position: relative;
  padding: 1.875rem 1.25rem 1.25rem;
  text-align: center;
  background: ${(props) => props.theme.colors.tertiary};
  display: flex;
  border-radius: 1.25rem;
  margin: 0 1.25rem 1.875rem;
  
  @media (min-width: ${Breakpoints.md}px) {
    width: 24.375rem;
    margin: 0;
    flex-grow: 1;
    height: auto;
  }
`;

export const Slides = styled.div`
  display: grid;
  grid-template-areas: 'slide';
  width: 100%;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1.25rem;
`;

export const Pagination = styled.nav`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
`;

export const PaginationDot = styled.button`
  display: block;
  width: 0.375rem;
  height: 0.375rem;
  border: 0;
  padding: 0;
  border-radius: 100%;
  margin-right: 0.25rem;
  cursor: pointer;
  background: ${(props: { theme?: Theme; active: boolean }) =>
    props.active
      ? props?.theme?.colors.primary
      : props?.theme?.colors.secondaryLight};
  transition: background-color 0.15s ease-in-out;

  &:focus {
    outline: none;
  }
`;
