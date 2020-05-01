import React from 'react';
import Dashboard from 'components/Dashboard';
import SideMenu from 'components/SideMenu';
import ContentLayout from 'components/layout/ContentLayout';
import CalendarView from 'components/CalendarView';

const MainLandingPage = () => (
  <div className="main-landing-page__component" style={{ display: "flex", padding: '20px 0 0', height: "100vh" }}>
    <SideMenu />
    <ContentLayout>
      <CalendarView />
    </ContentLayout>
    {/* <Dashboard /> */}
  </div>
);

export default MainLandingPage;
