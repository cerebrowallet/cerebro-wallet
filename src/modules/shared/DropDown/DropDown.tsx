import React from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import Select, { components } from 'react-select';
import { Field, FieldProps } from 'formik';

import Scrollbar from '../Scrollbar/Scrollbar';
import './DropDown.scss';

const DropDownValue = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="dropdown__value">
      <span className="dropdown__value-account">{value}</span>
      <strong className="dropdown__value-label">{label}</strong>
    </div>
  );
};

const IndicatorsContainer = (props: any) => {
  const { innerProps, selectProps } = props;

  return (
    <div
      {...innerProps}
      className={`dropdown__trigger${
        selectProps.menuIsOpen ? ' dropdown__trigger--menu-open' : ''
      }`}
    >
      <ChevronDownIcon />
    </div>
  );
};

const Option = (props: any) => {
  const { innerProps, data } = props;

  return (
    <div {...innerProps} className="dropdown__option">
      <DropDownValue label={data.label} value={data.value} />
    </div>
  );
};

const Menu = (props: any) => {
  const { children } = props;

  return (
    <components.Menu {...props} className="dropdown__menu">
      {props.options.length > 3 ? (
        <Scrollbar
          width="100%"
          height="7.7rem"
          wrapperClass="scrollbar--dropdown"
        >
          {children}
        </Scrollbar>
      ) : (
        children
      )}
    </components.Menu>
  );
};

const ValueContainer = (props: any) => {
  const { children } = props;

  return (
    <components.ValueContainer {...props} className="dropdown__value-container">
      {children}
    </components.ValueContainer>
  );
};

const Placeholder = (props: any) => {
  const { children } = props;

  return (
    <components.Placeholder {...props} className="dropdown__placeholder">
      {children}
    </components.Placeholder>
  );
};

const SingleValue = (props: any) => {
  const { data } = props;

  return (
    <components.SingleValue {...props} className="dropdown__single-value">
      <DropDownValue label={data.label} value={data.value} />
    </components.SingleValue>
  );
};

interface Value {
  value: string;
  label: string;
}

interface Props {
  options: Value[];
  name: string;
  className?: string;
  placeholder?: string;
  isSearchable?: boolean;
  required?: boolean;
  requiredErrorMessage?: string;
}

const DropDown: React.FC<Props> = ({
  name,
  options,
  className,
  placeholder,
  required,
  requiredErrorMessage,
  isSearchable,
}) => {
  return (
    <Field
      name={name}
      validate={(value: Value | null) => {
        let error;

        if (required && value === null) {
          error = requiredErrorMessage || 'no-message';
        }

        return error;
      }}
    >
      {({
        field: { value, onChange },
        form: { setFieldValue, setFieldTouched },
        meta: { touched, error },
      }: FieldProps) => (
        <div
          className={`dropdown${className ? ` ${className}` : ''}${
            touched && error ? ' dropdown--has-error' : ''
          }`}
        >
          <Select
            value={value}
            onChange={selectedValue => {
              setFieldValue(name, selectedValue);
            }}
            className="dropdown__select"
            options={options}
            placeholder={placeholder}
            components={{
              IndicatorsContainer,
              Option,
              Menu,
              ValueContainer,
              Placeholder,
              SingleValue,
            }}
            width="100%"
            isSearchable={isSearchable}
            styles={{
              container: (provided, state) => ({
                ...provided,
                width: '100%',
                borderRadius: state.selectProps.menuIsOpen
                  ? '0.625rem 0.625rem 0 0'
                  : '0.625rem',
              }),
              control: (_, { selectProps: { width } }) => ({
                width: width,
              }),
            }}
          />
          {touched && error && error !== 'no-message' && (
            <span className="form-el-error">{error}</span>
          )}
        </div>
      )}
    </Field>
  );
};

DropDown.defaultProps = {
  isSearchable: false,
};

export default DropDown;
