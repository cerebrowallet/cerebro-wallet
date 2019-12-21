import React, { useState } from 'react';
import { Lock as LockIcon } from 'react-feather';

import { ButtonColors } from '../../enums';

import Page from '../layout/Page';
import Button from '../forms/Button';
import Modal from '../shared/Modal';
import ConfirmModal from './ConfirmModal';

const DeleteAccount: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
          onConfirm={hideModal}
          account="My Account Name"
          description="To delete your account, we must be sure of safety. Enter account name:"
          confirmBtnName="Delete"
          confirmBtnColor={ButtonColors.red}
        />
      </Modal>
    </Page>
  );
};

export default DeleteAccount;
