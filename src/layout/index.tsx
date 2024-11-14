// src/layout/MainLayout.tsx

import { ReactNode } from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';


type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

    </>
  );
};

export default MainLayout;
