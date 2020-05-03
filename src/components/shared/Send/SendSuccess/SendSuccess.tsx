import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { ThumbsUp as ThumbsUpIcon } from 'react-feather';

import SuccessFace from '../../../../images/tx-success-face.png';

import { SendSteps } from '../../../../dictionaries';
import { getBlockStackName } from '../../../../store/user/selectors';
import { setTxDraftValues } from '../../../../store/account/actions';

import { Container, SuccessIcon, Text, Title, HashText } from './styled';

import SendPagination from '../SendPagination/SendPagination';
import Button from '../../../forms/Button/Button';
import Page from '../../../layout/Page/Page';
import WhiteBlock from '../../WhiteBlock';

const SendSuccess: React.FC<RouteComponentProps> = ({
  history,
  location: { state },
}) => {
  const name = useSelector(getBlockStackName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state.hash) {
      history.push('/');
    }

    return () => {
      dispatch(setTxDraftValues(null));
    };
  }, []);

  return (
    <Page
      headerText="Success"
      FooterIcon={ThumbsUpIcon}
      footerText={`You are doing everything right, ${name}.`}
    >
      <WhiteBlock>
        <Container>
          <SuccessIcon src={SuccessFace} />
          <Title>Congratulations!</Title>
          <Text>Your transaction was successfully sent! Hash:</Text>
          {state.hash && <HashText truncate value={state.hash} />}
          <Button onClick={() => history.push('/')}>Ok</Button>
        </Container>
        <SendPagination step={SendSteps.Success} />
      </WhiteBlock>
    </Page>
  );
};

export default withRouter(SendSuccess);
