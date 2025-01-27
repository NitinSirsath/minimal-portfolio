import { ListItem, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link if using react-router
import globalStyle from '../../style/globalStyle.module.css';
import CenterWrapper from '../wrappers/CenterWrapper';

const Navbar = () => {
  return (
    <CenterWrapper>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px', // Add some padding for better spacing
          background: 'rgba(149, 146, 146, 0.118)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Apply blur effect
          borderRadius: '8px', // Optional for rounded corners
        }}
      >
        <Typography variant="h3" className={globalStyle.ibmPlexMonoNormal}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            ns
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <ListItem disablePadding className={globalStyle.ibmPlexMonoNormal}>
            <Link
              to="/explore"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Explore
            </Link>
          </ListItem>
          <ListItem disablePadding className={globalStyle.ibmPlexMonoNormal}>
            <Link
              to="/contact"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Contact
            </Link>
          </ListItem>
          <ListItem disablePadding className={globalStyle.ibmPlexMonoNormal}>
            <Link
              to="/about"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              About
            </Link>
          </ListItem>
        </Stack>
      </div>
    </CenterWrapper>
  );
};

export default Navbar;
