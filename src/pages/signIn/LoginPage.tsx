import React from 'react';

import { Main, Content } from './styled';

import FeatureSlider from './FeatureSlider/FeatureSlider';
import Background from './Background/Background';
import SignIn from './SignIn/SignIn';
import Footer from './Footer/Footer';

const LoginPage: React.FC = () => {
  return (
    <Background>
      <Main>
        <Content>
          <SignIn />
          <FeatureSlider />
        </Content>
      </Main>
      <Footer />
    </Background>
  );
};

export default LoginPage;
