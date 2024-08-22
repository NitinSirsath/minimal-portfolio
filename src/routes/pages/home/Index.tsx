import { Typography } from '@mui/material';
// import globalStyles from '../../../style/globalStyle.module.css';

const HomePage = () => {
  return (
    <div>
      <div>
        <Typography variant="h2">
          {' '}
          Hallo, <span className="text-amber-300">I'm Nitin</span>.
        </Typography>
        <Typography variant="caption">A fullstack-engineer from the pune based in Aurangabad.</Typography>
      </div>
    </div>
  );
};

export default HomePage;
