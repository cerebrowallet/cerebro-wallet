import { Theme } from '../../utils/styled';
import colors from '../colors/colors';
import {ButtonColors} from "../../dictionaries";

const darkTheme: Theme = {
  colors: {
    background: colors.gray20,
    primary: colors.black,
    blockBackground: colors.white,
    secondary: colors.gray80,
    tertiary: colors.gray20,
    alt1: colors.orange,
    alt2: colors.red40,
    alt3: colors.green,
    buttons: {
      [ButtonColors.black]: {
        bg: colors.gray80,
        hover: colors.gray80,
        active: colors.black
      },
      [ButtonColors.red]: {
        bg: colors.red40,
        hover: colors.red20,
        active: colors.red60
      }
    }
  },
  fonts: {
    body: '',
  },
  fontSizes: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

export default darkTheme;
