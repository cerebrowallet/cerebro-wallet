import { take, put, select } from 'redux-saga/effects';

import { UserActionTypes } from '../types';
import { Genders } from '../../../dictionaries';
import { updateProfile, chooseRandomEmoji } from '../actions';
import { getProfile } from '../selectors';

const emojis = {
  [Genders.incognito]: ['robot'],
  [Genders.male]: ['lion', 'wolf', 'bear', 'dragon', 'octopus', 'fish'],
  [Genders.female]: [
    'unicorn',
    'squirrel',
    'fox',
    'doggo',
    'bee',
    'chick',
    'panda',
  ],
};

export default function* chooseRandomEmojiSaga({
  payload: { isAuthCallback },
}: ReturnType<typeof chooseRandomEmoji>) {
  let avatarUrl;
  let gender: Genders;

  if (isAuthCallback) {
    const { payload } = yield take(UserActionTypes.SET_PROFILE);
    avatarUrl = payload.avatarUrl;
    gender = payload.gender;
  } else {
    const profile = yield select(getProfile);
    avatarUrl = profile.avatarUrl;
    gender = profile.gender;
  }

  // if there is no avatar (either Cerebro or Blockstack),
  // choose random emoji based on gender and save it to profile
  if (avatarUrl === null) {
    yield put(
      updateProfile({
        withoutNotifications: true,
        update: {
          avatarEmoji:
            emojis[gender][Math.floor(Math.random() * emojis[gender].length)],
        },
      })
    );
  }
}
