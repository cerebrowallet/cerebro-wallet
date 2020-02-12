import React from 'react';
import Input from '../../forms/Input/Input';
import Button from '../../forms/Button/Button';
import { Formik, Form } from 'formik';

import { ButtonColors } from '../../../dictionaries';
import { Header, Content, Footer, BackButton } from './styled';

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
          <Header>Attention</Header>
          <Content>
            <p>{description}</p>
            <Input name="account" placeholder="Account name" />
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
      )}
    </Formik>
  );
};

export default ConfirmModal;
