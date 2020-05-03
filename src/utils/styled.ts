export interface Theme {
  colors: {
    background: string;
    blockBackground: string;
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    buttons: {
      [type: string]: {
        bg: string;
        hover: string;
        active: string;
      };
    };
    alt1: string;
    alt2: string;
    alt3: string;
  };
  fonts: {
    body: string;
  };
  fontSizes: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}
