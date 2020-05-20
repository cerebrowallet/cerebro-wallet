import React from 'react';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

import { Theme } from '../../../store/layout/types';

interface WrapperProps {
  appTheme: Theme;
  menuIsOpen: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  color: ${(props) => props.appTheme.colors.secondary};
  width: 1.5rem;
  height: 1.5rem;
  right: 0.9375rem;
  top: 50%;
  transform: ${(props: WrapperProps) =>
    props.menuIsOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'};
  padding: 0;
  transition: transform 0.2s ease-in-out;
  transform-origin: center center;
`;

const IndicatorsContainer: React.FC = (props: any) => {
  return (
    <Wrapper
      menuIsOpen={props.selectProps.menuIsOpen}
      appTheme={props.selectProps.appTheme}
    >
      <ChevronDownIcon />
    </Wrapper>
  );
};

export default IndicatorsContainer;
