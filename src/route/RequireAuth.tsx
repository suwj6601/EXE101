import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth = (props: RequireAuthProps) => {
  return true ? <>{props?.children}</> : <Navigate to="/" />;
};

export default RequireAuth;
