import React from 'react';
import { Unlock as UnlockIcon } from 'react-feather';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import PageContent from '../../../components/layout/PageContent/PageContent';
import FormGroup from '../../../components/forms/FormGroup/FormGroup';
import Button from '../../../components/forms/Button/Button';
import ButtonGroup from '../../../components/forms/ButtonGroup/ButtonGroup';
import WhiteBlock from '../../../components/shared/WhiteBlock';

import { createAccount } from '../../../store/account/actions';
import { getCoinsList } from '../../../store/user/selectors';

import CoinDropDown from '../../../components/forms/DropDown/CoinDropDown';
import { AddressTypes } from '../../../store/account/types';

const CreateAccount: React.FC = () => {
  const coins = useSelector(getCoinsList);
  const dispatch = useDispatch();

  return (
    <PageContent
      headerText="Create a new account"
      footerText="The account will be created with your Mnemonic phrase. Available features: check balance, charts, transactions history, send, receive and in-app exchange service."
      FooterIcon={UnlockIcon}
    >
      <Formik
        initialValues={{ coin: coins[0], addressType: AddressTypes.SegWit }}
        onSubmit={({ coin, addressType }) =>
          dispatch(createAccount(coin.id, addressType))
        }
      >
        {() => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="coin" options={coins} />
              </FormGroup>
              <FormGroup label="Address format">
                <ButtonGroup
                  name="type"
                  options={[
                    { name: 'Default', id: AddressTypes.SegWit },
                    { name: 'Legacy', id: AddressTypes.P2PKH },
                  ]}
                />
              </FormGroup>
              <Button type="submit">Create</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default CreateAccount;
