import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import { Form, Formik } from 'formik';
import {
  Compass as CompassIcon,
  File as FileIcon,
  ThumbsUp as ThumbsUpIcon,
  AlertOctagon as AlertIcon,
} from 'react-feather';

import { usePrevious } from '../../../utils/hooks';
import { Step, StepContainer } from './styled';
import { Statuses, Coins } from '../../../dictionaries';
import {
  getCreateTxResult,
  getRecommendedBTCFee,
  getAccountsListWithBalance,
} from '../../../store/account/selectors';
import { makeTx, setCreateTxResult } from '../../../store/account/actions';
import { getBlockstackUsername } from '../../../store/user/selectors';

import FillUp from './FillUp/FillUp';
import Confirm from './Confirm/Confirm';
import SendResult from './Result/Result';

import WhiteBlock from '../WhiteBlock';
import PageContent from '../../layout/PageContent/PageContent';
import NavDots from './NavDots/NavDots';
import { getRecommendedBTCFee as getRecommendedBTCFeeAction } from '../../../store/account/actions';

export enum TransferToTypes {
  Address = 'address',
  Account = 'account',
}

export interface TransferAccount {
  name: string;
  address: string;
  id: string;
  balance: number;
  coin: Coins;
}

export interface TxDraftFormValues {
  transferFrom: TransferAccount | null;
  transferTo: TransferAccount | string | null;
  transferToType: TransferToTypes;
  amount: string;
  amountInLocalCurrency: string;
  fee: string;
}

export enum SendSteps {
  fillUp,
  confirm,
  result,
}

const components = [FillUp, Confirm, SendResult];

interface Props {
  accountId?: string;
}

const Send: React.FC<Props> = ({ accountId }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(SendSteps.fillUp);
  const createTxResult = useSelector(getCreateTxResult);
  const recommendedFee = useSelector(getRecommendedBTCFee);
  const username = useSelector(getBlockstackUsername);
  const previousStep = usePrevious<SendSteps>(step) || 0;
  const accounts = useSelector(getAccountsListWithBalance);

  const descriptions = {
    [SendSteps.fillUp]: {
      headerText: 'Send',
      footerText:
        'Instantly send money to anyone or own wallet.',
      footerIcon: CompassIcon,
    },
    [SendSteps.confirm]: {
      headerText: 'Confirm',
      footerText: 'Please check details and confirm transaction.',
      footerIcon: FileIcon,
    },
    [SendSteps.result]: {
      headerText:
        createTxResult?.status === Statuses.Success ? 'Success' : 'Ooops',
      footerText:
        createTxResult?.status === Statuses.Success
          ? `You are doing everything right, ${username}`
          : 'Such errors happen. Maybe there are connection problems or something else. Check connection and try again.',
      footerIcon:
        createTxResult?.status === Statuses.Success ? ThumbsUpIcon : AlertIcon,
    },
  };

  useEffect(() => {
    if (createTxResult) {
      setStep(SendSteps.result);
    }
  }, [createTxResult]);

  useEffect(() => {
    dispatch(getRecommendedBTCFeeAction());

    return () => {
      setCreateTxResult(null);
    };
  }, [dispatch]);

  const transitions = useTransition(step, (p) => p, {
    from: {
      opacity: 0,
      transform:
        step < previousStep ? 'translate3d(-50%,0,0)' : 'translate3d(100%,0,0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform:
        step < previousStep ? 'translate3d(100%,0,0)' : 'translate3d(-50%,0,0)',
    },
    initial: null,
  });

  return (
    <PageContent
      headerText={descriptions[step].headerText}
      FooterIcon={descriptions[step].footerIcon}
      footerText={descriptions[step].footerText}
    >
      <Formik
        initialValues={{
          transferFrom: accountId
            ? ((accounts || []).find(
                (account) => account.id === accountId
              ) as TransferAccount)
            : null,
          transferTo: null,
          transferToType: TransferToTypes.Address,
          amount: '',
          amountInLocalCurrency: '',
          fee: recommendedFee.toString(),
        }}
        enableReinitialize
        onSubmit={(values: TxDraftFormValues) => dispatch(makeTx(values))}
      >
        {() => (
          <Form>
            <WhiteBlock>
              <StepContainer>
                {transitions.map(({ item, props, key }) => {
                  const Page = components[item] as React.ElementType;

                  return (
                    <Step key={key} style={props}>
                      <Page setStep={setStep} accountId={accountId} />
                    </Step>
                  );
                })}
              </StepContainer>
              <NavDots step={step} setStep={setStep} />
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default Send;
