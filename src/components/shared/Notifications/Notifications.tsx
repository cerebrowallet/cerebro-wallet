import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import { X as XIcon } from 'react-feather';

import { Notification as NotificationType } from '../../../store/layout/types';
import { getNotification } from '../../../store/layout/selectors';
import {
  Container,
  Notification,
  Default,
  DefaultInvert,
  Error,
  Success,
  Button,
} from './styled';
import { removeNotification } from '../../../store/layout/actions';
import { NotificationTypes } from '../../../dictionaries';

const config = { tension: 125, friction: 20, precision: 0.1 };

let id = 0;

const Notifications: React.FC = () => {
  const [refMap] = useState(() => new WeakMap());
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState<Notification[]>([]);

  // @ts-ignore
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0 },
    enter: item => async (next: any) =>
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight,
        life: '100%',
      }),
    leave: item => async (next: any, cancel: any) => {
      cancelMap.set(item, cancel);
      await next({ life: '0%' });
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
    onRest: (item: any) =>
      setItems(state => state.filter((i: any) => i.key !== item.key)),
    config: (item: any, state: string) =>
      state === 'leave' ? [{ duration: 3000 }, config, config] : config,
  });

  const newNotification = useSelector(getNotification);
  useEffect(() => {
    if (newNotification) {
      setItems((state: any[]) => [...state, { ...newNotification, id: id++ }]);
      removeNotification();
    }
  }, [newNotification]);

  return ReactDOM.createPortal(
    <Container>
      {transitions.map(
        ({
          key,
          item,
          props,
        }: {
          key: string;
          item: NotificationType;
          props: any;
        }) => {
          if (!item) {
            return undefined;
          }

          const { type, text } = item;

          let component = <Default />;

          if (type === NotificationTypes.Success) {
            component = <Success />;
          }

          if (type === NotificationTypes.Error) {
            component = <Error />;
          }

          if (type === NotificationTypes.DefaultInvert) {
            component = <DefaultInvert />;
          }

          return (
            <Notification key={key} style={props}>
              {React.cloneElement(component, {
                ref: (ref: any) => ref && refMap.set(item, ref),
                children: (
                  <>
                    {text}
                    <Button
                      onClick={e => {
                        e.stopPropagation();
                        cancelMap.has(item) && cancelMap.get(item)();
                      }}
                    >
                      <XIcon />
                    </Button>
                  </>
                ),
              })}
            </Notification>
          );
        }
      )}
    </Container>,
    document.body
  );
};

export default Notifications;
