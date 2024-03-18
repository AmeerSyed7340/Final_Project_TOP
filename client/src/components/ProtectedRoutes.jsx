import { Navigate } from "react-router-dom";

// Example ProtectedRoute component
function ProtectedRoute({ authenticated, children }) {
    return authenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;