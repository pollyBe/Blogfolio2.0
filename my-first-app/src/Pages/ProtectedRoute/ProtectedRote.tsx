import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { auth } = useSelector((state:RootState) => state.signIn);
  if (!auth) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};
export default ProtectedRoute;