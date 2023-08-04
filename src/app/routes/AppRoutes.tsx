import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllSpells from 'app/page/AllSpells';
import AppLayout from 'app/layout/AppLayout';
import SingleSpell from 'app/page/SingleSpell';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Existing route */}
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<AllSpells />} />

          {/* Add route to /index */}
          <Route path=':index' element={<SingleSpell />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
