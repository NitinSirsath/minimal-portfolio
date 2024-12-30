import { ListItem, Stack, Typography } from '@mui/material';
import globalStyle from '../../style/globalStyle.module.css';

const Navbar = () => {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px', // Add some padding for better spacing
        background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Apply blur effect
        borderRadius: '8px', // Optional for rounded corners
      }}
    >
      <Typography variant="h3" className={globalStyle.ibmPlexMonoNormal}>
        ns
      </Typography>
      <Stack direction="row" spacing={2}>
        <ListItem className={globalStyle.ibmPlexMonoNormal}>Explore</ListItem>
        <ListItem className={globalStyle.ibmPlexMonoNormal}>Contact</ListItem>
        <ListItem className={globalStyle.ibmPlexMonoNormal}>About</ListItem>
      </Stack>
    </div>
  );
};

export default Navbar;
