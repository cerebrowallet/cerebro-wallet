import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

const Wrapper = styled(components.ValueContainer)`
  position: relative;
  padding: 1rem 0 !important;
  flex-wrap: nowrap !important;
  height: 3.4375rem!important;
`;

const ValueContainer = (props: any) => {
  const { children, selectProps } = props;

  if (selectProps.valueContainerComponent) {
    return (
      <selectProps.valueContainerComponent {...props}>
        {children}
      </selectProps.valueContainerComponent>
    );
  }

  return <Wrapper {...props}>{children}</Wrapper>;
};

export default ValueContainer;
