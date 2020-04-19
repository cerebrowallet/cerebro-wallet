import React from 'react';
import { Field, FieldProps } from 'formik';

import { InputError } from '../InputError';
import { InputElement, TextArea, Wrapper } from './styled';
import { Statuses } from '../../../dictionaries';

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
  onChange?: (value: string, error?: string) => void;
  hideTextError?: boolean;
}

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
  onChange,
  hideTextError,
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
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(e);

            if (onChange) {
              onChange(e.target.value);
            }
          },
        };

        const hasError = touched && error;

        return (
          <Wrapper className={className}>
            {type === 'textarea' ? (
              <TextArea
                {...props}
                rows={rows}
                status={hasError ? Statuses.Fail : undefined}
              />
            ) : (
              <InputElement
                {...props}
                type={type}
                status={hasError ? Statuses.Fail : undefined}
              />
            )}
            {hasError && !hideTextError && error !== 'no-message' && (
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
