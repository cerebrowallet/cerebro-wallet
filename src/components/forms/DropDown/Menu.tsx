import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import Scrollbar, { StyledTrackY, StyledThumbY } from '../../Scrollbar';

const Wrapper = styled(components.Menu)`
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04) !important;
  background: ${props => props.selectProps.appTheme.colors.tertiary} !important;
  border: 0 !important;
  border-top: 1px solid ${props => props.selectProps.appTheme.colors.blockBackground} !important;
  margin: 0 !important;
  padding: 0.5625rem 0 1.1rem !important;
  border-radius: 0 0 0.625rem 0.625rem !important;
`;

const SidebarTrackY = styled(StyledTrackY)`
  right: 0.3125rem;
  top: 0.1rem;
  background: none;
  bottom: 0.2rem;
`;

const SidebarThumbY = styled(StyledThumbY)`
  background: #C1C4C6;
`;

const Menu = (props: any) => {
  const { children } = props;

  return (
    <Wrapper {...props}>
      {props.options.length > 3 ? (
        <Scrollbar
          width="100%"
          height="7.7rem"
          TrackY={SidebarTrackY}
          ThumbY={SidebarThumbY}
        >
          {children}
        </Scrollbar>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default Menu;
