import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const FullWidthWrapper = ({ children }: IProps) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default FullWidthWrapper;
