import React from 'react';
import TopNav from '../../components/TopNav';
import SideNav from '../../components/SideNav';
import Footer from '../../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
