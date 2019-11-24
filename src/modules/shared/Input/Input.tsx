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
}

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
          placeholder,
          disabled,
          className: 'input__el',
        };

        return (
          <div
            className={`input${touched && error ? ' input--has-error' : ''}${
              className ? ` ${className}` : ''
            }`}
          >
            {type === 'textarea' ? (
              <textarea {...props} rows={1} />
            ) : (
              <input type={type} {...props} />
            )}
            {touched && error && <span className="form-el-error">{error}</span>}
          </div>
        );
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
