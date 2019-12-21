import React from 'react';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

import { Theme } from "../../../utils/styled";


interface WrapperProps {
  selectProps: {
    menuIsOpen: boolean;
    appTheme: Theme;
  };
}

const Wrapper = styled.div`
  position: absolute;
  color: ${props => props.selectProps.appTheme.colors.secondary};
  width: 1.5rem;
  height: 1.5rem;
  right: 0.9375rem;
  top: 50%;
  transform: ${(props: WrapperProps) =>
    props.selectProps.menuIsOpen
      ? 'translateY(-50%) rotate(180deg)'
      : 'translateY(-50%)'};
  padding: 0;
  transition: transform 0.15s ease-in-out;
  transform-origin: center center;
`;

const IndicatorsContainer: React.FC = (props: any) => {
  return (
    <Wrapper {...props}>
      <ChevronDownIcon />
    </Wrapper>
  );
};

export default IndicatorsContainer;
