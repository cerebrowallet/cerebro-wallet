import React, { useState } from 'react';
import { Download as DownloadIcon } from 'react-feather';
import { Form, Formik } from 'formik';

import Page from '../layout/Page/Page';
import FormGroup from '../forms/FormGroup/FormGroup';
import DropDown from '../forms/DropDown/DropDown';
import Button from '../forms/Button/Button';
import Modal from '../shared/Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import WhiteBlock from '../shared/WhiteBlock';

const ExportPrivateKey: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  return (
    <Page
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
          account="My Account Name"
          description="To export your private key, we must be sure of safety. Enter account name:"
          confirmBtnName="Export"
        />
      </Modal>
    </Page>
  );
};

export default ExportPrivateKey;
