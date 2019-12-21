import React from 'react';
import { Field, FieldProps } from 'formik';
import styled from 'styled-components';

import { Theme } from '../../utils/styled';
import { InputError } from './InputError';

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  requiredErrorMessage?: string;
  className?: string;
  disabled?: boolean;
  validate?: (value: string) => string | undefined;
  rows?: number;
}

const Wrapper = styled.div`
  position: relative;
`;

interface InputProps {
  haserror?: string | false;
  className?: string;
  theme?: Theme;
}

const InputElement = styled.input`
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

const TextArea: React.FC<TextAreaProps> = props => <textarea {...props} />;

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  className,
  disabled,
  required,
  validate,
  requiredErrorMessage,
  rows,
}) => {
  return (
    <Field
      name={name}
      validate={(value: string) => {
        let error;

        if (validate) {
          error = validate(value);
        } else if (required && value === '') {
          error = requiredErrorMessage || 'no-message';
        }

        return error;
      }}
    >
      {({ field, meta: { touched, error } }: FieldProps) => {
        const props = {
          ...field,
          placeholder,
          disabled,
        };

        const hasError = touched && error;

        return (
          <Wrapper className={className}>
            {type === 'textarea' ? (
              <InputElement
                as={TextArea}
                {...props}
                rows={rows}
                haserror={hasError}
              />
            ) : (
              <InputElement {...props} type={type} haserror={hasError} />
            )}
            {hasError && error !== 'no-message' && (
              <InputError>{error}</InputError>
            )}
          </Wrapper>
        );
      }}
    </Field>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  rows: 1,
};

export default Input;
