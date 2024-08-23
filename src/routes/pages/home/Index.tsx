import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
// import globalStyles from '../../../style/globalStyle.module.css';

const HomePage = () => {
  return (
    <div>
      <div className="py-10">
        <Typography variant="h2">
          {' '}
          Hallo, <span className="text-amber-300">I'm Nitin</span>.
        </Typography>
        <Typography variant="caption">A fullstack-engineer from the pune based in Aurangabad.</Typography>
        <Typography className="py-5" variant="body1">
          I work with leading-edge companies <br />
          to create exceptional products. <br />I most recently worked with MoonPay to help <br />
          make web3 accessible. Before that, I built personal and <br />
          business banking products for millions of customers at Monzo.
        </Typography>
        <Button endIcon={<ArrowForwardRounded />} variant="contained">
          More Infomation
        </Button>
      </div>
      <Divider />
      <div className="py-10">
        <Typography variant="h3">Personal Project</Typography>
        <Typography className="py-3" variant="body1">
          Below is a selection of recent projects that I've worked on.
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;
