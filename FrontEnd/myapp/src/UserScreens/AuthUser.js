import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthUser = () => {
  const auth = localStorage.getItem("UserToken");
  return <>{ auth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AuthUser;
