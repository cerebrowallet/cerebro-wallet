import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { ButtonColors } from '../../enums';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  account: string;
  description: string;
  confirmBtnName: string;
  confirmBtnColor?: ButtonColors;
}

const Header = styled.header`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 0.8125rem;
`;

const Content = styled.section`
  margin-bottom: 1.375rem;

  p {
    font-size: 0.8125rem;
    line-height: 1.5rem;
    margin-bottom: 0.625rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  border: 0;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 1.25rem;

  &:focus {
    outline: none;
  }
`;

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
