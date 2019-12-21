import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

const Wrapper = styled(components.MenuList)`
  overflow-y: hidden!important;
`;

const MenuList: React.FC = (props: any) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default MenuList;
