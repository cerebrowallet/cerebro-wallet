import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

const Wrapper = styled(components.Placeholder)`
  font-size: 1rem;
  line-height: 2.2rem;
  padding: 0 1.25rem;
  margin: 0 !important;
  position: static !important;
  transform: none !important;
  top: auto !important;
`;

const Placeholder = (props: any) => {
  const { children } = props;

  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Placeholder;
