import { Theme } from '../../utils/styled';
import colors from '../colors/colors';
import { ButtonColors } from '../../dictionaries';

const darkTheme: Theme = {
  colors: {
    background: colors.gray20,
    primary: colors.black,
    altPrimary: colors.gray90,
    blockBackground: colors.white,
    secondary: colors.gray80,
    tertiary: colors.gray20,
    altHover: colors.darkBlue,
    hover: colors.gray40,
    alt1: colors.orange,
    alt2: colors.red40,
    alt3: colors.green,
    buttons: {
      [ButtonColors.black]: {
        bg: colors.gray80,
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

export default darkTheme;
