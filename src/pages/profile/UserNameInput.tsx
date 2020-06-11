import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { InputElement } from '../../components/forms/Input/styled';

import { getProfile } from '../../store/user/selectors';
import { updateProfile } from '../../store/user/actions';

const UserNameInput: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);
  const username = profile?.username || '';
  const [value, setValue] = useState<string>(username);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(username);
  }, [username]);

  const handleProfileUpdate = () => {
    if (value !== username) {
      dispatch(
        updateProfile({
          update: {
            username: value || '',
          },
        })
      );

      if (inputEl && inputEl.current) {
        inputEl.current.blur();
      }
    }
  };

  return (
    <InputElement
      type="text"
      value={value}
      ref={inputEl}
      placeholder="Enter"
      name="username"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      onBlur={handleProfileUpdate}
      onKeyPress={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          handleProfileUpdate();
        }
      }}
    />
  );
};

export default UserNameInput;
