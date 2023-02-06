import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesAdmin = () => {
  const roles = localStorage.Roles;
  return roles === "Admin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutesAdmin;
