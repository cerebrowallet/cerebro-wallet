import React, { useState } from 'react';
import { Download as DownloadIcon } from 'react-feather';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import { getAccountById } from '../../store/account/selectors';

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

const ExportPrivateKey: React.FC<Props> = ({ accountId }) => {
  const account = useSelector(getAccountById(accountId));
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  if (!account) {
    return null;
  }

  return (
    <PageContent
      headerText="Export Private Kay"
      footerText="Download txt. file with different formats."
      FooterIcon={DownloadIcon}
    >
      <Formik
        initialValues={{
          format: null,
        }}
        onSubmit={() => setShowModal(true)}
      >
        {() => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Private Key format">
                <DropDown
                  name="format"
                  required
                  options={[{ id: 'WIF', name: 'wif' }]}
                />
              </FormGroup>
              <Button type="submit">Next</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
      <Modal showModal={showModal} onHide={hideModal}>
        <ConfirmModal
          onCancel={hideModal}
          onConfirm={hideModal}
          account={account}
          description="To export your private key, we must be sure of safety. Enter account name:"
          confirmBtnName="Export"
        />
      </Modal>
    </PageContent>
  );
};

export default ExportPrivateKey;