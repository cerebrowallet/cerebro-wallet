import React from 'react';

import {
  Container,
  OneColumnContainer,
  TwoColumnsContainer,
  Main,
  OneColumnContent,
  TwoColumnsContent,
  DashboardContent,
  LoginContent,
  Sidebar,
} from './styled';
import Scrollbar from '../../shared/Scrollbar/Scrollbar';
import { MainThumbYEl, MainTrackY } from '../../shared/Scrollbar/styled';
import ClosePageButton from './ClosePageButton/ClosePageButton';

export enum PageLayouts {
  oneColumn = 'one-column',
  twoColumns = 'two-columns',
  dashboard = 'dashboard',
  login = 'login',
}

const containerComponents = {
  [PageLayouts.oneColumn]: OneColumnContainer,
  [PageLayouts.twoColumns]: TwoColumnsContainer,
  [PageLayouts.dashboard]: Container,
  [PageLayouts.login]: Container,
};

const contentComponents = {
  [PageLayouts.oneColumn]: OneColumnContent,
  [PageLayouts.twoColumns]: TwoColumnsContent,
  [PageLayouts.dashboard]: DashboardContent,
  [PageLayouts.login]: LoginContent,
};

interface Props {
  layout: PageLayouts;
  children: React.ReactNode;
  sidebarContent: React.ReactElement<any>;
}

const Page: React.FC<Props> = ({ layout, children, sidebarContent }) => {
  const ContainerLayout = containerComponents[layout];
  const ContentLayout = contentComponents[layout];

  return (
    <ContainerLayout>
      <Main>
        <Scrollbar ThumbY={MainThumbYEl} TrackY={MainTrackY}>
          <ContentLayout>{children}</ContentLayout>
        </Scrollbar>
      </Main>
      <Sidebar>{sidebarContent}</Sidebar>
      {(layout === PageLayouts.oneColumn ||
        layout === PageLayouts.twoColumns) && <ClosePageButton />}
    </ContainerLayout>
  );
};

export default Page;
