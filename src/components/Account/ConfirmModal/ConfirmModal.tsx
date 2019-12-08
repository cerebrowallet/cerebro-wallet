import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { Formik, Form } from 'formik';

import './ConfirmModal.scss';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  account: string;
  description: string;
  confirmBtnName: string;
}

const ConfirmModal: React.FC<Props> = ({
  onConfirm,
  onCancel,
  account,
  confirmBtnName,
  description,
}) => {
  return (
    <Formik initialValues={{ account: '' }} onSubmit={onConfirm}>
      {() => (
        <Form>
          <section className="confirm-modal">
            <header className="confirm-modal__header">Attention</header>
            <main className="confirm-modal__content">
              <p>{description}</p>
              <Input name="account" />
            </main>
            <footer className="confirm-modal__footer">
              <button
                type="button"
                className="confirm-modal__back-btn"
                onClick={onCancel}
              >
                &larr; Back
              </button>
              <Button type="submit" className="button--modal">
                {confirmBtnName}
              </Button>
            </footer>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmModal;
