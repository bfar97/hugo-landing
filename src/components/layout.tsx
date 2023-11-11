import React, { ReactNode } from 'react';

interface LayoutProps {
  id: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ id, children }: {
  id: string;
  children: ReactNode;
}) => {
  return (
    <div id={id} className="font-sans max-w-screen max-h-screen w-screen h-screen relative p-0 m-0" style={{ overflowX: 'hidden' }}>
      {children}
    </div>
  );
};

export default Layout;
