import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />} />
        <Route path="/signup" element={<AuthLayout />} />
        <Route path="/verify-account" element={<AuthLayout />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
