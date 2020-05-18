import styled from 'styled-components';
import { Theme } from '../../../../utils/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface ButtonProps {
  active: boolean;
  theme?: Theme;
}

export const Button = styled.button`
  color: ${(props: ButtonProps) => {
    if (props.theme) {
      return props.active
        ? props.theme.colors.primary
        : props.theme.colors.secondary;
    }
  }};
  font-weight: ${(props: ButtonProps) => (props.active ? 600 : 'normal')};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  border: 0;
  background: none;
  padding: 0;
  margin-left: 0.625rem;
  cursor: ${(props: ButtonProps) => (props.active ? 'default' : 'pointer')};
  transition: color .15s ease-in;
  
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 0.9375rem;
`;
