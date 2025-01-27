import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  widthPercentage?: number;
}

const CenterWrapper = ({ children, widthPercentage = 50 }: IProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          width: `${widthPercentage}%`,
          textAlign: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CenterWrapper;
