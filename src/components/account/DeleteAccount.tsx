import React, { useState } from 'react';
import { Lock as LockIcon } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteAccount } from '../../store/account/actions';
import { getAccounts } from '../../store/account/selectors';
import { showNotification } from '../../store/layout/actions';
import { NotificationTypes } from '../../dictionaries';
import { ButtonColors } from '../../dictionaries';

import Page from '../layout/Page/Page';
import Button from '../forms/Button/Button';
import Modal from '../shared/Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Loader from '../shared/Loader/Loader';

interface Props {
  accountId: string;
}

const DeleteAccount: React.FC<Props> = ({ accountId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const accounts = useSelector(getAccounts);

  if (!accounts) {
    return <Loader />;
  }

  const account = accounts.byIds[accountId];

  const hideModal = () => setShowModal(false);

  return (
    <Page
      headerText="Delete"
      footerText="Save the private key before deleting your account."
      FooterIcon={LockIcon}
    >
      <p>
        Your account will be removed from Cerebro. We can import account again
        if you own your{' '}
        <Link to={`/account/${accountId}/export-private-key`}>private key</Link>
        . We strongly advise you to save the private key in a secure place.
      </p>
      <Button
        color={ButtonColors.red}
        onClick={() => {
          if (accounts.allIds.length > 1) {
            setShowModal(true);
          } else {
            dispatch(
              showNotification({
                type: NotificationTypes.Error,
                text:
                  'The last account cannot be deleted from Cerebro. Сreate a new account and then delete current. Wallet cannot be empty.',
              })
            );
          }
        }}
      >
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
