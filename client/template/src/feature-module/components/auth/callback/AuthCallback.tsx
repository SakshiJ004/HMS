import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { all_routes } from '../../../routes/all_routes';

const AuthCallback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const handleSocialAuthCallback = () => {
            try {
                const encodedData = searchParams.get('data');

                if (!encodedData) {
                    navigate(all_routes.loginbasic + '?error=authentication_failed');
                    return;
                }

                // Decode and parse user data
                const userData = JSON.parse(decodeURIComponent(encodedData));

                // Store user data in localStorage
                localStorage.setItem('userData', JSON.stringify(userData));
                localStorage.setItem('token', userData.token);

                // Role-based redirect
                switch (userData.role) {
                    case 'admin':
                        navigate(all_routes.dashboard);
                        break;
                    case 'doctor':
                        navigate(all_routes.doctordashboard);
                        break;
                    case 'patient':
                        navigate(all_routes.patientdashboard);
                        break;
                    default:
                        navigate(all_routes.dashboard);
                }
            } catch (error) {
                console.error('Auth callback error:', error);
                navigate(all_routes.loginbasic + '?error=authentication_failed');
            }
        };

        handleSocialAuthCallback();
    }, [searchParams, navigate]);

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="text-dark">Completing authentication...</h5>
                <p className="text-muted">Please wait while we log you in.</p>
            </div>
        </div>
    );
};

export default AuthCallback;