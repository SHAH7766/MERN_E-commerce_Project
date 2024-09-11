import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminAuth = () => {
  const auth = localStorage.getItem("Token");

  return <>{auth ? <Outlet /> : <Navigate to="/adminlogin" />}</>;
};

export default AdminAuth;
