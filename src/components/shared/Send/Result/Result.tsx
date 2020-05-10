import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import SuccessFace from '../../../../images/tx-success-face.png';
import SadFace from '../../../../images/tx-sad-face.png';
import { Statuses } from '../../../../dictionaries';
import { SendSteps } from '../Send';
import { getCreateTxResult } from '../../../../store/account/selectors';
import { Container, HashText, Icon, Link, Text, Title } from './styled';
import { config } from '../../../../config';
import { setCreateTxResult } from '../../../../store/account/actions';

import Button from '../../../forms/Button/Button';

interface Props extends RouteComponentProps {
  setStep: (step: SendSteps) => void;
}

const Result: React.FC<Props> = ({ history, setStep }) => {
  const createTxResult = useSelector(getCreateTxResult);
  const dispatch = useDispatch();

  return (
    <Container>
      {createTxResult?.status === Statuses.Success ? (
        <>
          <Icon src={SuccessFace} />
          <Title>Congratulations!</Title>
          <Text>Your transaction was successfully sent! Hash:</Text>
          {createTxResult.txHash && (
            <HashText truncate value={createTxResult.txHash} />
          )}
          <Button onClick={() => history.push('/')}>Ok</Button>
        </>
      ) : (
        <>
          <Icon src={SadFace} />
          <Title>Something went wrong!</Title>
          <Text>
            Failed to send transaction.
            <br />
            Try again later or{' '}
            <Link href={`mailto: ${config.supportEmail}`}>E-mail support.</Link>
          </Text>
          <Button
            onClick={() => {
              setStep(SendSteps.fillUp);
              dispatch(setCreateTxResult(null));
            }}
          >
            Try again
          </Button>
        </>
      )}
    </Container>
  );
};

export default withRouter(Result);
