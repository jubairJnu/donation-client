import { currentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks/Hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoutes;
