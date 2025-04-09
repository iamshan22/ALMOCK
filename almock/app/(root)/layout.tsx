import { ReactNode } from 'react'

const Layout = ({ Children }: { Children: ReactNode }) => {
  return (
    <div>{Children}</div>
  );
};

export default Layout