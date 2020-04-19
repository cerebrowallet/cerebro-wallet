import React from 'react';
import styled from 'styled-components';

import { Statuses } from '../../../dictionaries';
import { Theme } from '../../../utils/styled';

export const Wrapper = styled.div`
  position: relative;
`;

interface InputProps {
  status?: Statuses;
  className?: string;
  theme?: Theme;
}

export const InputElement = styled.input`
  display: block;
  background: ${(props) => props.theme.colors.tertiary};
  border: 1px solid
    ${(props: InputProps) => {
      if (!props.theme) {
        return null;
      }

      if (props.status === Statuses.Success) {
        return props.theme.colors.alt3;
      }

      if (props.status === Statuses.Fail) {
        return props.theme.colors.alt2;
      }

      return props.theme.colors.tertiary;
    }};
  border-radius: 0.625rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
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

const TextAreaElement: React.FC = (props) => <textarea {...props} />;

export const TextArea: React.FC<TextAreaProps> = ({ status }) => {
  return <InputElement as={TextAreaElement} status={status} />;
};
