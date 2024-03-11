
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
        <Header/>
          <div className=' bg-[#f7fafc]'>
            <Outlet/>
          </div>
        <Footer/>
    </div>
  );
};

export default MainLayout;