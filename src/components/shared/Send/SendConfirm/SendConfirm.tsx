import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { File as FileIcon } from 'react-feather';

import { getTxDraftValues } from '../../../../store/account/selectors';
import { getSettings } from '../../../../store/user/selectors';
import { makeTransaction } from '../../../../store/account/actions';
import { SendSteps, CurrencySymbols } from '../../../../dictionaries';

import {
  Title,
  Amount,
  AmountInLocalCurrency,
  Details,
  Actions,
  BackButton,
} from './styled';

import SendPagination from '../SendPagination/SendPagination';
import Button from '../../../forms/Button/Button';
import PageContent from '../../../layout/PageContent/PageContent';
import WhiteBlock from '../../WhiteBlock';
import Loader from '../../Loader/Loader';

const SendConfirm: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getTxDraftValues);
  const history = useHistory();
  const settings = useSelector(getSettings);

  useEffect(() => {
    if (!data) {
      history.push('/features/send');
    }
  }, [data]);

  if (!data) {
    return null;
  }

  if (!settings) {
    return <Loader />;
  }

  return (
    <PageContent
      headerText="Confirm"
      FooterIcon={FileIcon}
      footerText="Please check details and confirm transaction."
    >
      <WhiteBlock>
        <Title>You want to spend</Title>
        <Amount>
          {data.amount} {data.transferFrom.coin}
        </Amount>
        <AmountInLocalCurrency>
          {!!settings.currency && CurrencySymbols[settings.currency]}
          {data.amountInLocalCurrency}
        </AmountInLocalCurrency>
        <Details>
          <dt>From</dt>
          <dd>{data.transferFrom.address}</dd>
          <dt>To</dt>
          <dd>
            {typeof data.transferTo === 'string'
              ? data.transferTo
              : data.transferTo.address}
          </dd>
          <dt>Network fee</dt>
          <dd>
            {data.fee} {data.transferFrom.coin}
          </dd>
          <dt>Will receive</dt>
          <dd>
            {data.amount} {data.transferFrom.coin}
          </dd>
        </Details>
        <Actions>
          <BackButton type="button" onClick={() => history.goBack()}>
            &larr; Back
          </BackButton>
          <Button type="button" onClick={() => dispatch(makeTransaction())}>
            Confirm
          </Button>
        </Actions>
        <SendPagination step={SendSteps.Confirm} />
      </WhiteBlock>
    </PageContent>
  );
};

export default SendConfirm;
