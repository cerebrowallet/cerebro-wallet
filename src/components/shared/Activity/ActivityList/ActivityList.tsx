import React from 'react';
import { useSelector } from 'react-redux';

import { ActivityTypes } from '../../../../dictionaries';
import { getActivities } from '../../../../store/account/selectors';
import {
  TransactionActivity,
  Activities,
} from '../../../../store/account/types';

import { SidebarTrackY } from '../../Scrollbar/styled';
import { ActivityListContainer } from './styled';

import Scrollbar from '../../Scrollbar/Scrollbar';
import Transaction from './Transaction/Transaction';
import DayTotals from './DayTotals/DayTotals';
import Update from './Update/Update';
import SwipeForMore from '../SwipeForMore/SwipeForMore';
import NoActivities from "./NoActivities/NoActivities";

interface Props {
  context?: string;
}

const ActivityList: React.FC<Props> = ({ context }) => {
  const activities: Activities[] = useSelector(getActivities);

  return (
    <ActivityListContainer>
      <Scrollbar TrackY={SidebarTrackY}>
        <>
          {activities.length > 0 ? (
            activities.map((activity: any) => {
              const key = `${activity.type}-${activity.id}`;

              if (activity.type === ActivityTypes.Date) {
                return (
                  <DayTotals
                    key={key}
                    amount={activity.totalAmount}
                    date={activity.date}
                  />
                );
              }

              if (activity.type === ActivityTypes.Transaction) {
                return (
                  <Transaction
                    key={`${activity.type}-${activity.accountId}-${activity.id}`}
                    transaction={activity as TransactionActivity}
                    uriPrefix={context}
                  />
                );
              }

              if (activity.type === ActivityTypes.Update) {
                return (
                  <Update
                    key={key}
                    title={activity.title}
                    excerpt={activity.excerpt}
                    readMoreLink={activity.link}
                    closable={activity.closable}
                  />
                );
              }

              return null;
            })
          ) : (
            <NoActivities />
          )}
          {/*<Update*/}
          {/*  title="Congratulations!"*/}
          {/*  excerpt={*/}
          {/*    <>*/}
          {/*      Your wallet has been successfully created. Try starting with{' '}*/}
          {/*      <a href="https://docs.cerebrowallet.com">Knowledge Base</a>. We*/}
          {/*      are really happy to meet you!*/}
          {/*    </>*/}
          {/*  }*/}
          {/*  closable={false}*/}
          {/*  lightBg*/}
          {/*/>*/}
        </>
      </Scrollbar>
      <SwipeForMore />
    </ActivityListContainer>
  );
};

export default ActivityList;
