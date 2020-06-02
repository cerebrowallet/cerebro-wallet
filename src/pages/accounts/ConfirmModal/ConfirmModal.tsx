import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { Account } from '../../../store/account/types';
import { ButtonColors } from '../../../dictionaries';
import { showNotification } from '../../../store/layout/actions';
import { NotificationTypes } from '../../../dictionaries';

import { Header, Content, Footer, BackButton } from './styled';

import Input from '../../../components/forms/Input/Input';
import Button from '../../../components/forms/Button/Button';

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
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '' }}
      enableReinitialize
      onSubmit={(values: { name: string }) => {
        if (values.name.trim() === account.name.trim()) {
          onConfirm();
        } else {
          dispatch(
            showNotification({
              type: NotificationTypes.Error,
              text: 'Invalid accounts name, try again.',
            })
          );
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
            ‹ Back
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
