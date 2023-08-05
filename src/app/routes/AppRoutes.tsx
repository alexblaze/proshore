import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllSpells from 'app/page/AllSpells';
import AppLayout from 'app/layout/AppLayout';
import SingleSpell from 'app/page/SingleSpell';

// AppRoutes component defines the routing for the application
const AppRoutes = () => {
  return (
    // Use the BrowserRouter to enable client-side routing
    <Router>
      <Routes>
        {/* Existing route */}
        {/* Route for the AppLayout, which serves as the layout for all pages */}
        <Route path='/' element={<AppLayout />}>
          {/* Route for the AllSpells page, shown when the path is the root */}
          <Route path='/' element={<AllSpells />} />

          {/* Add route to /index */}
          {/* Route for the SingleSpell page, shown when the path contains a spell index */}
          <Route path=':index' element={<SingleSpell />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
