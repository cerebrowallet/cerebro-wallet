import React from 'react';
import { Formik, Form } from 'formik';

import { Account } from '../../../store/account/types';
import { ButtonColors } from '../../../dictionaries';

import { Header, Content, Footer, BackButton } from './styled';

import Input from '../../forms/Input/Input';
import Button from '../../forms/Button/Button';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  account: Account;
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
    <Formik
      initialValues={{ name: '' }}
      enableReinitialize
      onSubmit={(values: { name: string }) => {
        if (values.name === account.name) {
          onConfirm();
        }
      }}
    >
      <Form>
        <Header>Attention</Header>
        <Content>
          <p>{description}</p>
          <Input name="name" placeholder="Account name" required />
        </Content>
        <Footer>
          <BackButton type="button" onClick={onCancel}>
            &larr; Back
          </BackButton>
          <Button type="submit" color={confirmBtnColor}>
            {confirmBtnName}
          </Button>
        </Footer>
      </Form>
    </Formik>
  );
};

export default ConfirmModal;
