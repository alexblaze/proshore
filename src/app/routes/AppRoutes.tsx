import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllSpells from "app/page/AllSpells";
import AppLayout from "app/layout/AppLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<AllSpells />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
