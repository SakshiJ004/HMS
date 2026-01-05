import { Navigate } from 'react-router';
import { all_routes } from '../../feature-module/routes/all_routes';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const token = localStorage.getItem('token');
    const userDataStr = localStorage.getItem('userData');

    // Not logged in - redirect to login
    if (!token || !userDataStr) {
        return <Navigate to={all_routes.loginbasic} replace />;
    }

    try {
        const userData = JSON.parse(userDataStr);
        const userRole = userData.role;

        // Check if user's role is allowed
        if (!allowedRoles.includes(userRole)) {
            // Redirect based on actual role
            switch (userRole) {
                case 'admin':
                    return <Navigate to={all_routes.dashboard} replace />;
                case 'doctor':
                    return <Navigate to={all_routes.doctordashboard} replace />;
                case 'patient':
                    return <Navigate to={all_routes.patientdashboard} replace />;
                default:
                    return <Navigate to={all_routes.loginbasic} replace />;
            }
        }

        // Role is allowed - render the component
        return <>{children}</>;
    } catch (error) {
        console.error('Error parsing user data:', error);
        return <Navigate to={all_routes.loginbasic} replace />;
    }
};

export default ProtectedRoute;