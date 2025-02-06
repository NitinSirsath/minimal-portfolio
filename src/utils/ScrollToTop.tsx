import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Scrolling to top:', pathname);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // Ensures body scroll is reset
      console.log(
        'Scroll position after reset:',
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );
    }, 50); // Delay ensures it executes after React renders
  }, [pathname]);

  return null;
};

export default ScrollToTop;
