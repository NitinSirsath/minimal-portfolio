import React from 'react';
import Navbar from '../components/navbar/Navbar';

type IProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: IProps) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
