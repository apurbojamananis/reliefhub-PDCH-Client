import { currentToken } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedLayout;
