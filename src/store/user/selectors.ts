import { createSelector } from 'reselect';
import { UserData } from 'blockstack/lib/auth/authApp';

import { Currencies, Genders, TimeOuts } from '../../dictionaries';
import { ApplicationState } from '../index';
import { enumToMap } from '../../utils/common';
import { config } from '../../config';
import { Value } from '../../components/forms/DropDown/DropDown';

export const getUserData = (state: ApplicationState) => state.user.userData;
export const getBlockstackUsername = createSelector(
  getUserData,
  (userData?: UserData) => (userData ? userData.username.split('.')[0] : null)
);
export const getBlockStackName = createSelector(
  getUserData,
  (userData?: UserData) => (userData ? userData.profile.name : null)
);
export const getBlockstackAvatarUrl = createSelector(
  getUserData,
  (userData?: UserData) =>
    userData && userData.profile.image.length > 0
      ? userData.profile.image[0].contentUrl
      : null
);
export const getProfileData = (state: ApplicationState) => state.user.profile;
export const getSettings = (state: ApplicationState) => state.user.settings;
export const getGendersList = () =>
  Array.from(enumToMap(Genders).entries()).map(([id, name]) => ({
    id,
    name: name.toString(),
  }));
export const getCurrenciesList = (): Value[] =>
  Object.values(Currencies).map(key => ({
    id: key,
    name: key,
  }));
export const getCoinsList = () =>
  Object.values(config.coins).map(coin => ({
    name: coin.name,
    id: coin.abbr,
  }));
export const getTimeoutsList = () =>
  Object.values(TimeOuts)
    .map(key => {
      const k = key as any;
      const ms = parseInt(k, 10);
      const minutes = ms / 60000;

      return {
        name: `${minutes} minute${key === 1 ? '' : 's'}`,
        id: ms,
      };
    })
    .filter(option => !Number.isNaN(option.id));
export const getActivityFilters = (state: ApplicationState) =>
  state.user.activityFilters;
export const getUpdates = (state: ApplicationState) => state.user.updates;
