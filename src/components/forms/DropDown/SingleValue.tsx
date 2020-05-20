import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import Value from './Value';

const Wrapper = styled(components.SingleValue)`
  margin: 0 !important;
  width: 100%;
  position: static !important;
  transform: none !important;
  max-width: none !important;
  color: ${(props) => props.selectProps.appTheme.colors.primary} !important;
`;

const SingleValue = (props: any) => {
  const { data, selectProps } = props;

  return (
    <Wrapper {...props}>
      {selectProps.valueComponent ? (
        <selectProps.valueComponent {...data} />
      ) : (
        <Value name={data.name} id={data.id} />
      )}
    </Wrapper>
  );
};

export default SingleValue;
