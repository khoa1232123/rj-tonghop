import React from 'react';
import TopNav from '../../components/Admin/TopNav';
import SideNav from '../../components/Admin/SideNav';
import Footer from '../../components/Admin/Footer';

const Admin = ({ children }) => {
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

export default Admin;
