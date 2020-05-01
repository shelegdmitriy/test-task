import React from 'react';
import SideMenu from 'components/SideMenu';
import ContentLayout from 'components/layout/ContentLayout';
import CalendarView from 'components/CalendarView';

const MainLandingPage = () => (
  <div className="main-landing-page__component">
    <SideMenu />
    <ContentLayout>
      <CalendarView />
    </ContentLayout>
  </div>
);

export default MainLandingPage;
