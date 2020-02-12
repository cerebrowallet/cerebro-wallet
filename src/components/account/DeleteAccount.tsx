import React, { useState } from 'react';
import { Lock as LockIcon } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import { deleteAccount } from '../../store/account/actions';
import { getAccountById } from '../../store/account/selectors';
import { ButtonColors } from '../../dictionaries';

import Page from '../layout/Page/Page';
import Button from '../forms/Button/Button';
import Modal from '../shared/Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';

interface Props {
  accountId: string;
}

const DeleteAccount: React.FC<Props> = ({ accountId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const account = useSelector(getAccountById(accountId));

  const hideModal = () => setShowModal(false);

  return (
    <Page
      headerText="Delete"
      footerText="Save the private key before deleting your account."
      FooterIcon={LockIcon}
    >
      <p>
        Your account will be removed from Cerebro. We can import account again
        if you own your private key. We strongly advise you to save the private
        key in a secure place.
      </p>
      <Button color={ButtonColors.red} onClick={() => setShowModal(true)}>
        Next
      </Button>
      <Modal showModal={showModal} onHide={hideModal}>
        <ConfirmModal
          onCancel={hideModal}
          onConfirm={() => {
            dispatch(deleteAccount(accountId));
            hideModal();
          }}
          account={account}
          description="To delete your account, we must be sure of safety. Enter account name:"
          confirmBtnName="Delete"
          confirmBtnColor={ButtonColors.red}
        />
      </Modal>
    </Page>
  );
};

export default DeleteAccount;
