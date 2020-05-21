import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './styled';
import { Themes } from '../../../../store/user/types';
import { getSettings } from '../../../../store/user/selectors';
import { updateSettings } from '../../../../store/user/actions';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(getSettings);

  return (
    <Button
      type="button"
      selectedTheme={settings.theme}
      onClick={() =>
        dispatch(
          updateSettings({
            update: {
              theme:
                settings.theme === Themes.light ? Themes.dark : Themes.light,
            },
            withoutNotifications: true,
          })
        )
      }
    />
  );
};

export default ThemeToggle;
