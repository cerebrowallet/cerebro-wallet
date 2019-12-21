import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../store';
import * as themes from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  const { theme } = useSelector((state: ApplicationState) => state.layout);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default LayoutContainer;
