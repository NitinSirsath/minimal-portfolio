import { ListItem, Stack, Typography } from '@mui/material';
import globalStyle from '../../style/globalStyle.module.css';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px', padding: '50px' }}>
      <Typography variant="h3" className={globalStyle.ibmPlexMonoBold}>
        NS
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
