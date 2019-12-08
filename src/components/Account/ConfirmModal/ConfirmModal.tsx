import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { Formik, Form } from 'formik';

import { ButtonColors } from '../../../enums';

import './ConfirmModal.scss';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  account: string;
  description: string;
  confirmBtnName: string;
  confirmBtnColor?: ButtonColors;
}

const ConfirmModal: React.FC<Props> = ({
  onConfirm,
  onCancel,
  account,
  confirmBtnName,
  description,
  confirmBtnColor,
}) => {
  return (
    <Formik initialValues={{ account: '' }} onSubmit={onConfirm}>
      {() => (
        <Form>
          <section className="confirm-modal">
            <header className="confirm-modal__header">Attention</header>
            <main className="confirm-modal__content">
              <p>{description}</p>
              <Input name="account" placeholder="Account name" />
            </main>
            <footer className="confirm-modal__footer">
              <button
                type="button"
                className="confirm-modal__back-btn"
                onClick={onCancel}
              >
                &larr; Back
              </button>
              <Button
                type="submit"
                className="button--modal"
                color={confirmBtnColor}
              >
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
