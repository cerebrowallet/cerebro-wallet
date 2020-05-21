import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Themes } from '../store/user/types';
import { getSettings } from '../store/user/selectors';
import * as themes from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  const settings = useSelector(getSettings);

  return (
    <ThemeProvider
      theme={settings.theme === Themes.light ? themes.light : themes.dark}
    >
      {children}
    </ThemeProvider>
  );
};

export default LayoutContainer;
