export interface Theme {
  colors: {
    background: string;
    blockBackground: string;
    primary: string;
    secondary: string;
    tertiary: string;
    altPrimary: string;
    altHover: string;
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
}
