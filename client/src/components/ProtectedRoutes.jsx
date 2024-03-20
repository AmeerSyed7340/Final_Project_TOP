import { Navigate } from "react-router-dom";

// Example ProtectedRoute component
function ProtectedRoute({ token, children }) {
    return token ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;