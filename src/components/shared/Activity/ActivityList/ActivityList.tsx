import React from 'react';

import Scrollbar from '../../Scrollbar/Scrollbar';
import { SidebarTrackY } from '../../Scrollbar/styled';
import { Currencies } from '../../../../enums';
import Transaction from './Transaction/Transaction';
import DayTotals from './DayTotals/DayTotals';
import BlogPost from './BlogPost/BlogPost';
import SwipeForMore from '../SwipeForMore/SwipeForMore';
import { ActivityListContainer } from './styled';

const ActivityList: React.FC = () => {
  return (
    <ActivityListContainer>
      <Scrollbar TrackY={SidebarTrackY}>
        <>
          <DayTotals
            amount={-177}
            date={new Date('November 2, 2019 00:00:00')}
          />
          <Transaction
            transaction={{
              currency: Currencies.BTC,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: -103,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <Transaction
            transaction={{
              currency: Currencies.STX,
              hash: '307bf3bd...1c805593',
              amount: 10,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <Transaction
            transaction={{
              currency: Currencies.BTC,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: -84,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <BlogPost
            title="One Dev is Sad without Your Feedback"
            excerpt="Like most creators, we want to be aware of how our work is received by its intended..."
            readMoreLink="https://blog.cerebrowallet.com"
          />
          <DayTotals amount={28} date={new Date('November 5, 2019 00:00:00')} />
          <Transaction
            transaction={{
              currency: Currencies.STX,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: 25,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <Transaction
            transaction={{
              currency: Currencies.BTC,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: -2,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <DayTotals
            amount={-2}
            date={new Date('November 10, 2019 00:00:00')}
          />
          <Transaction
            transaction={{
              currency: Currencies.BTC,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: -4,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <Transaction
            transaction={{
              currency: Currencies.BTC,
              hash: '307bf3bd...1c805593',
              comment: 'Transaction comment',
              amount: 2,
              account: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
            }}
          />
          <BlogPost
            title="Congratulations!"
            excerpt={
              <>
                Your wallet has been successfully created. Try starting with{' '}
                <a href="https://docs.cerebrowallet.com">Knowledge Base</a>. We
                are really happy to meet you!
              </>
            }
            closable={false}
          />
        </>
      </Scrollbar>
      <SwipeForMore />
    </ActivityListContainer>
  );
};

export default ActivityList;
