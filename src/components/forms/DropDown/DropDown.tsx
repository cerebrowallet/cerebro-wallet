import React from 'react';
import Select from 'react-select';
import { Field, FieldProps } from 'formik';
import styled, { withTheme } from 'styled-components';

import { Theme } from '../../../utils/styled';

import Value from './Value';
import IndicatorsContainer from './IndicatorsContainer';
import Option from './Option';
import Menu from './Menu';
import ValueContainer from './ValueContainer';
import Placeholder from './Placeholder';
import SingleValue from './SingleValue';
import MenuList from './MenuList';
import { InputError } from '../InputError';

export interface Value {
  id: string | number;
  name: string;
}

export interface DropDownProps {
  options: Value[];
  name: string;
  className?: string;
  placeholder?: string;
  isSearchable?: boolean;
  required?: boolean;
  requiredErrorMessage?: string;
  onChange?: (value: Value) => void;
  optionComponent?: React.ComponentType<any>;
  valueContainerComponent?: React.ComponentType<any>;
  valueComponent?: React.ComponentType<any>;
  theme?: Theme;
}

const DropDownWrapper = styled.div`
  position: relative;
`;

const DropDownSelect = styled(Select)`
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 0.625rem;
  font-size: 1rem;
  background: #f7f7f7;
  cursor: pointer;
  line-height: 1.5rem;
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.colors.alt2 : props.theme.colors.tertiary};
`;

const DropDown: React.FC<DropDownProps> = ({
  name,
  options,
  className,
  placeholder,
  required,
  requiredErrorMessage,
  isSearchable,
  onChange,
  optionComponent,
  valueComponent,
  valueContainerComponent,
  theme,
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
        field: { value },
        form: { setFieldValue },
        meta: { touched, error },
      }: FieldProps) => (
        <DropDownWrapper>
          <DropDownSelect
            hasError={touched && error}
            value={value}
            onChange={(selectedValue: Value) => {
              setFieldValue(name, selectedValue);

              if (onChange) {
                onChange(selectedValue);
              }
            }}
            getOptionLabel={(option: Value) => option.name}
            getOptionValue={(option: Value) => option.id}
            options={options}
            placeholder={placeholder}
            optionComponent={optionComponent}
            valueComponent={valueComponent}
            valueContainerComponent={valueContainerComponent}
            components={{
              IndicatorsContainer,
              Option,
              Menu,
              ValueContainer,
              Placeholder,
              SingleValue,
              MenuList,
            }}
            width="100%"
            isSearchable={isSearchable}
            appTheme={theme}
            styles={{
              container: (provided: any, state: any) => ({
                ...provided,
                width: '100%',
                borderRadius: state.selectProps.menuIsOpen
                  ? '0.625rem 0.625rem 0 0'
                  : '0.625rem',
              }),
              control: (_: any, { selectProps: { width } }: any) => ({
                width: width,
              }),
            }}
          />
          {touched && error && error !== 'no-message' && (
            <InputError>{error}</InputError>
          )}
        </DropDownWrapper>
      )}
    </Field>
  );
};

DropDown.defaultProps = {
  isSearchable: false,
};

export default withTheme(DropDown);
