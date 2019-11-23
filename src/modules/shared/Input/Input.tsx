import React from 'react';
import { Field, FieldProps } from 'formik';

import './Input.scss';

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  className,
  disabled,
}) => {
  return (
    <Field name={name}>
      {({ field, meta: { touched, error } }: FieldProps) => {
        const props = {
          ...field,
          className: `input${touched && error ? ' input--has-error' : ''}${
            className ? ` ${className}` : ''
          }`,
          placeholder,
          disabled,
        };

        if (type === 'textarea') {
          return <textarea {...props} rows={1} />;
        }

        return <input type={type} {...props} />;
      }}
    </Field>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
};

export default Input;
