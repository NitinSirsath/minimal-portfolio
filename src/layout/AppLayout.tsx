import React from 'react';
import Navbar from '../components/navbar/Navbar';

type IProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: IProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '42%' }}>
        <div className="my-11">
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
