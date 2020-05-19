import { Theme } from '../../utils/styled';
import colors from '../colors/colors';
import { ButtonColors } from '../../dictionaries';

const lightTheme: Theme = {
  colors: {
    background: colors.gray20,
    blockBackground: colors.white,
    primary: colors.black,
    altPrimary: colors.gray90,
    secondary: colors.gray60,
    tertiary: colors.gray20,
    hover: colors.gray40,
    altHover: colors.darkBlue,
    alt1: colors.orange,
    alt2: colors.red40,
    alt3: colors.green,
    buttons: {
      [ButtonColors.black]: {
        bg: colors.gray90,
        hover: colors.gray80,
        active: colors.black,
      },
      [ButtonColors.red]: {
        bg: colors.red40,
        hover: colors.red20,
        active: colors.red60,
      },
    },
  },
};

export default lightTheme;
