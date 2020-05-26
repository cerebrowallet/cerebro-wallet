import React, { useEffect, useState } from 'react';
import { config, useTransition } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, SubscribeStatus } from './styled';
import {
  getSettings,
  getEmailSubscribeStatus,
} from '../../../store/user/selectors';
import { InputElement } from '../../../components/forms/Input/styled';
import { subscribeOnNews } from '../../../store/user/actions';
import { Statuses } from '../../../dictionaries';
import Loader from '../../../components/shared/Loader/Loader';

const NewsletterEmailInput: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(getSettings);
  const emailSubscribeStatus = useSelector(getEmailSubscribeStatus);
  const [emailDraft, setEmailDraft] = useState('');
  const [valid, setValid] = useState(false);
  const email = settings?.email;

  useEffect(() => {
    setValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(emailDraft));
  }, [emailDraft]);

  useEffect(() => {
    if (email) {
      setEmailDraft(email);
    }
  }, [email]);

  // @ts-ignore
  const transitions = useTransition(
    valid &&
      ((emailSubscribeStatus &&
        emailSubscribeStatus !== Statuses.Success &&
        emailSubscribeStatus !== Statuses.Fail) ||
        settings?.email !== emailDraft),
    null,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.stiff,
    }
  );

  const statusTransition = useTransition(!!emailSubscribeStatus, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  if (!settings) {
    return null;
  }

  return (
    <Container>
      <InputElement
        status={emailSubscribeStatus}
        placeholder="Enter your e-mail address"
        value={emailDraft}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmailDraft(e.target.value)
        }
        disabled={emailSubscribeStatus === Statuses.InProgress}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(subscribeOnNews(emailDraft));
          }
        }}
      />
      {transitions.map(
        ({ key, props, item }) =>
          item && (
            <Button
              key={key}
              style={props}
              onClick={() => dispatch(subscribeOnNews(emailDraft))}
            >
              {emailSubscribeStatus === Statuses.InProgress ? <Loader /> : '→'}
            </Button>
          )
      )}
      {statusTransition.map(
        ({ key, props, item }) =>
          item && (
            <SubscribeStatus
              style={props}
              key={key}
              status={emailSubscribeStatus}
            >
              {emailSubscribeStatus === Statuses.Success &&
                "Thank you! You're subscribed."}
              {emailSubscribeStatus === Statuses.Fail && 'Whoops, try again!'}
            </SubscribeStatus>
          )
      )}
    </Container>
  );
};

export default NewsletterEmailInput;
