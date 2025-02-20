import { Navigate } from "react-router-dom";

export default function checkJWT({ children }) {
  const JWT = localStorage.getItem("JWT");

  if (!JWT) {
    return <Navigate to="/login" />;
  }

  return children;
}
