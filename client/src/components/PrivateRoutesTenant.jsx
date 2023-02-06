import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesTenant = () => {
  const roles = localStorage.Roles;
  return roles === "Tenant" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutesTenant;
