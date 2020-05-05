import React, { useEffect, useState } from 'react';
import { config, useTransition } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, SubscribeStatus } from './styled';
import { getSettings } from '../../../store/user/selectors';
import { InputElement } from '../../../components/forms/Input/styled';
import { subscribeOnNews } from '../../../store/user/actions';
import { Statuses } from '../../../dictionaries';
import Loader from '../../../components/shared/Loader/Loader';

const NewsletterEmailInput: React.FC = () => {
  const settings = useSelector(getSettings);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(email));
  }, [email]);

  useEffect(() => {
    if (settings.email) {
      setEmail(settings.email);
    }
  }, [settings.email]);

  // @ts-ignore
  const transitions = useTransition(
    valid &&
      ((settings.emailSubscribeStatus !== Statuses.Success &&
        settings.emailSubscribeStatus !== Statuses.Fail) ||
        settings.email !== email),
    null,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.stiff,
    }
  );

  const statusTransition = useTransition(
    !!settings.emailSubscribeStatus,
    null,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  return (
    <Container>
      <InputElement
        status={settings.emailSubscribeStatus}
        placeholder="Enter your e-mail address"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        disabled={settings.emailSubscribeStatus === Statuses.InProgress}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(subscribeOnNews(email));
          }
        }}
      />
      {transitions.map(
        ({ key, props, item }) =>
          item && (
            <Button
              key={key}
              style={props}
              onClick={() => dispatch(subscribeOnNews(email))}
            >
              {settings.emailSubscribeStatus === Statuses.InProgress ? (
                <Loader />
              ) : (
                '→'
              )}
            </Button>
          )
      )}
      {statusTransition.map(
        ({ key, props, item }) =>
          item && (
            <SubscribeStatus
              style={props}
              key={key}
              status={settings.emailSubscribeStatus}
            >
              {settings.emailSubscribeStatus === Statuses.Success &&
                "Thank you! You're subscribed."}
              {settings.emailSubscribeStatus === Statuses.Fail &&
                'Whoops, try again!'}
            </SubscribeStatus>
          )
      )}
    </Container>
  );
};

export default NewsletterEmailInput;
