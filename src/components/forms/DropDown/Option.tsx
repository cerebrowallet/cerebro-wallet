import React from 'react';
import styled from 'styled-components';

import Value from './Value';

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  background: ${(props: any) =>
    props.selectProps.appTheme.colors.secondaryExtraLight};

  &:hover {
    background: ${(props: any) =>
      props.selectProps.appTheme.colors.secondaryLight};
  }
`;

const Option: React.FC = (props: any) => {
  const { innerProps, selectProps, data } = props;

  return (
    <Wrapper {...innerProps} selectProps={selectProps}>
      {selectProps.optionComponent ? (
        <selectProps.optionComponent {...data} />
      ) : (
        <Value name={data.name} id={data.id} />
      )}
    </Wrapper>
  );
};

export default Option;
