import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { auth } = useSelector((state:any) => state.signIn);
  if (!auth) {
    return <Navigate to="/sign-up" />;
  }
  return children;
};
export default ProtectedRoute;