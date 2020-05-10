import styled from 'styled-components';
import { Theme } from '../../../../utils/styled';

export const Container = styled.div`
  text-align: center;
  list-style: none;
  margin: 2.3125rem 0 0 0;
  padding: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 1.875rem;
  }
`;

interface StepProps {
  current: boolean;
  theme: Theme;
  disabled: boolean;
}

export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 100%;
  margin: 0 0.125rem;
  background: ${(props: StepProps) =>
    props.current && props.theme ? props.theme.colors.primary : '#eaeaea'};
  cursor: ${(props: StepProps) => props.disabled ? 'default' : 'pointer'};
  border: 0;
  padding: 0;
  transition: background 0.15s ease-in;

  &:focus {
    outline: none;
  }
`;
