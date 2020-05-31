import React, { useState } from 'react';
import { Download as DownloadIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { getAccountById } from '../../store/account/selectors';
import { exportPrivateKey } from '../../store/account/actions';
import { KeyTypes } from '../../store/account/types';

import PageContent from '../../components/layout/PageContent/PageContent';
import FormGroup from '../../components/forms/FormGroup/FormGroup';
import DropDown from '../../components/forms/DropDown/DropDown';
import Button from '../../components/forms/Button/Button';
import Modal from '../../components/shared/Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import WhiteBlock from '../../components/shared/WhiteBlock';

interface Props {
  accountId: string;
}

const keyTypesOptions = [
  {
    id: KeyTypes.Mnemonic,
    name: 'Mnemonic phrase',
  },
  {
    id: KeyTypes.PrivateKey,
    name: 'Private key',
  },
  { id: KeyTypes.WIF, name: 'WIF' },
];

const ExportPrivateKey: React.FC<Props> = ({ accountId }) => {
  const account = useSelector(getAccountById(accountId));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  if (!account) {
    return null;
  }

  const options = keyTypesOptions.filter(
    (option) =>
      !(
        account.keyType !== KeyTypes.Mnemonic && option.id === KeyTypes.Mnemonic
      )
  );

  return (
    <PageContent
      headerText="Export Private Kay"
      footerText="Download txt. file with different formats."
      FooterIcon={DownloadIcon}
    >
      <Formik
        initialValues={{
          keyType: options[0],
        }}
        onSubmit={() => setShowModal(true)}
      >
        {({
          values,
        }: {
          values: { keyType: { id: KeyTypes; name: string } };
        }) => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Private Key format">
                <DropDown name="keyType" required options={options} />
              </FormGroup>
              <Button type="submit">Next</Button>
            </WhiteBlock>
            <Modal showModal={showModal} onHide={hideModal}>
              <ConfirmModal
                onCancel={hideModal}
                onConfirm={() => {
                  hideModal();
                  dispatch(exportPrivateKey(accountId, values.keyType.id));
                }}
                account={account}
                description="To export your private key, we must be sure of safety. Enter account name:"
                confirmBtnName="Export"
              />
            </Modal>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default ExportPrivateKey;
