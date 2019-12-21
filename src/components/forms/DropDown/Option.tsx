import React from 'react';
import styled from 'styled-components';

import Value from './Value';

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  background: ${(props: any) => props.selectProps.appTheme.colors.tertiary};

  &:hover {
    background: #eaeaea;
  }
`;

const Option: React.FC = (props: any) => {
  const { innerProps, selectProps, data } = props;

  return (
    <Wrapper {...innerProps} selectProps={selectProps}>
      {selectProps.optionComponent ? (
        <selectProps.optionComponent {...data} />
      ) : (
        <Value
          label={data.label}
          value={data.value}
          showValue={selectProps.showValue}
        />
      )}
    </Wrapper>
  );
};

export default Option;
