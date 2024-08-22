import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
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
        <pre className="py-4">
          I work with leading-edge companies to create exceptional products. <br />I most recently worked with MoonPay to
          help make web3 accessible.
          <br />
          Before that, I built personal and business banking <br />
          products for millions of customers at Monzo.
        </pre>
        <Button endIcon={<ArrowForwardRounded />} variant="contained">
          More Infomation
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
