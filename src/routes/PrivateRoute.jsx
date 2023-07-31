import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loggedIn } = useSelector((store) => store.mainReducer);

  if (loggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
