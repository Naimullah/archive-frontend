import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Users from '../pages/Users';
import Create from '@/pages/dashboard/Create';

const AppRoutes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </ReactRoutes>
    </>
  );
};

export default AppRoutes;
