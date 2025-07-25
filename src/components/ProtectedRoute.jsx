// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("authUser"));

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
