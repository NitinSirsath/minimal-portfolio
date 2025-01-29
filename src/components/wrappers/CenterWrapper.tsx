import { ReactNode } from 'react';
import { useMediaQuery, useTheme, Box } from '@mui/material';

interface IProps {
  children: ReactNode;
  widthPercentage?: number;
}

const CenterWrapper = ({ children, widthPercentage = 50 }: IProps) => {
  const theme = useTheme();

  // Responsive Breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Dynamic Width Calculation
  const calculatedWidth = isMobile ? '90%' : isTablet ? '75%' : `${widthPercentage}%`;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Box width={calculatedWidth} maxWidth="1200px">
        {children}
      </Box>
    </Box>
  );
};

export default CenterWrapper;
