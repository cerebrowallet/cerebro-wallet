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
import Input from '../../../components/forms/Input/Input';

const CreateAccount: React.FC = () => {
  const coins = useSelector(getCoinsList);
  const dispatch = useDispatch();

  return (
    <PageContent
      headerText="Create a new account"
      footerText="The account will be created with your Mnemonic phrase using Default (bech32) or Legacy format. Available features: check balance, charts, transaction history, send, receive and in-app exchange service."
      FooterIcon={UnlockIcon}
    >
      <Formik
        initialValues={{
          coin: coins[0],
          addressType: AddressTypes.SegWit,
          name: '',
        }}
        onSubmit={({ coin, addressType, name }) =>
          dispatch(
            createAccount({
              coin: coin.id,
              addressType,
              name,
            })
          )
        }
      >
        {({ values }) => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="coin" options={coins} />
              </FormGroup>
              <FormGroup label="Address format">
                <ButtonGroup
                  name="addressType"
                  options={[
                    { name: 'Default', id: AddressTypes.SegWit },
                    { name: 'Legacy', id: AddressTypes.P2PKH },
                  ]}
                />
              </FormGroup>
              <FormGroup label="Account name">
                <Input
                  name="name"
                  placeholder={`${values.coin.name} (optional)`}
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
