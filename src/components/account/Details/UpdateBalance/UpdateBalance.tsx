import React from 'react';
import { RotateCw as RotateIcon } from 'react-feather';
import { useDispatch } from 'react-redux';

import { getAccountBalance } from '../../../../store/account/actions';
import { Button } from './styled';

interface Props {
  accountId: string;
}

const UpdateBalance: React.FC<Props> = ({ accountId }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(getAccountBalance(accountId))}>
      <RotateIcon />
    </Button>
  );
};

export default UpdateBalance;
