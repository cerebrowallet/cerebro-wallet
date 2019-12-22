import styled from 'styled-components';
import { Theme } from '../../../utils/styled';
import React from 'react';

export const Wrapper = styled.div`
  position: relative;
`;

interface InputProps {
  haserror?: string | false;
  className?: string;
  theme?: Theme;
}

export const InputElement = styled.input`
  display: block;
  background: ${props => props.theme.colors.tertiary};
  border: 1px solid
    ${(props: InputProps) =>
      props.haserror
        ? props.theme && props.theme.colors.alt2
        : props.theme && props.theme.colors.tertiary};
  border-radius: 0.625rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.primary};
  padding: 1rem 1.25rem;
  width: 100%;
  resize: none;
  transition: border-color 0.15s ease-in;

  &:focus {
    outline: none;
  }
` as any;

interface TextAreaProps extends InputProps {
  rows?: number;
}

const TextAreaElement: React.FC = props => <textarea {...props} />;

export const TextArea: React.FC<TextAreaProps> = () => {
  return <InputElement as={TextAreaElement} />;
};
