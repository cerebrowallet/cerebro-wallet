import React from 'react';
import { Home as HomeIcon } from 'react-feather';

import logo from '../../../images/text-logo.svg';
import { Wrapper, Header, HomeButton, Footer, Logo } from './styled';
import SignTabs from './AuthOptions/AuthOptions';

const AuthSidebar: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="" />
        <HomeButton to="/">
          <HomeIcon />
        </HomeButton>
      </Header>
      <SignTabs />
      <Footer>
        Copyright © 2019 Cerebro. All rights reserved.
        <br />
        <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
      </Footer>
    </Wrapper>
  );
};

export default AuthSidebar;
