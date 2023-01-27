import { Outlet } from 'react-router-dom';
import Navigation from '../components/Header/Navigation/navigation';

import { Suspense } from 'react';

export const Layout = () => {
  return (
      <div >
            
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
     
    </div>
  );
};
