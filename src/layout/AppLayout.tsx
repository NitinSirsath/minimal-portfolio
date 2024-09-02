import React from 'react';
import Navbar from '../components/navbar/Navbar';
import styles from './appLayout.module.css';
import Footer from '../components/footer/Footer';

type IProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: IProps) => {
  return (
    <div className={styles.appLayout} style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ minWidth: '44%' }}>
        <div className={styles.headerContainer}>
          <Navbar />
        </div>
        <div className={styles.mainContent} style={{ overflowY: 'scroll' }}>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
