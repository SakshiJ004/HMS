// import { useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router';
// import { all_routes } from '../../../routes/all_routes';

// const AuthCallback = () => {
//     const navigate = useNavigate();
//     const [searchParams] = useSearchParams();

//     useEffect(() => {
//         const handleSocialAuthCallback = () => {
//             try {
//                 const encodedData = searchParams.get('data');

//                 if (!encodedData) {
//                     console.error('❌ No data received from social auth');
//                     navigate(all_routes.loginbasic + '?error=authentication_failed');
//                     return;
//                 }

//                 // Decode and parse user data
//                 const userData = JSON.parse(decodeURIComponent(encodedData));

//                 console.log('✅ Received user data from backend:', userData);

//                 // IMPORTANT: Clear old data first
//                 localStorage.clear();

//                 // Store NEW user data in localStorage
//                 localStorage.setItem('userData', JSON.stringify(userData));
//                 localStorage.setItem('token', userData.token);

//                 console.log('📱 Stored in localStorage:', {
//                     fullName: userData.fullName,
//                     firstName: userData.firstName,
//                     lastName: userData.lastName,
//                     email: userData.email,
//                     role: userData.role,
//                     profileImage: userData.profileImage
//                 });

//                 // Role-based redirect
//                 console.log('🚀 Redirecting based on role:', userData.role);

//                 switch (userData.role) {
//                     case 'admin':
//                         console.log('→ Going to Admin Dashboard');
//                         navigate(all_routes.dashboard);
//                         break;
//                     case 'doctor':
//                         console.log('→ Going to Doctor Dashboard');
//                         navigate(all_routes.doctordashboard);
//                         break;
//                     case 'patient':
//                     default:
//                         console.log('→ Going to Patient Dashboard');
//                         navigate(all_routes.patientdashboard);
//                         break;
//                 }
//             } catch (error) {
//                 console.error('❌ Auth callback error:', error);
//                 navigate(all_routes.loginbasic + '?error=authentication_failed');
//             }
//         };

//         handleSocialAuthCallback();
//     }, [searchParams, navigate]);

//     return (
//         <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
//             <div className="text-center">
//                 <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <h5 className="text-dark mb-2">Completing authentication...</h5>
//                 <p className="text-muted">Please wait while we log you in.</p>
//             </div>
//         </div>
//     );
// };

// export default AuthCallback;



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
                    console.error('❌ No data received from social auth');
                    navigate(all_routes.loginbasic + '?error=authentication_failed');
                    return;
                }

                // Decode and parse user data
                const userData = JSON.parse(decodeURIComponent(encodedData));

                console.log('✅ Received user data from backend:', userData);

                // IMPORTANT: Clear old data first
                localStorage.clear();

                // Store NEW user data in localStorage
                localStorage.setItem('userData', JSON.stringify(userData));
                localStorage.setItem('token', userData.token);

                console.log('📱 Stored in localStorage:', {
                    fullName: userData.fullName,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    role: userData.role,
                    profileImage: userData.profileImage
                });

                // ✅ FIX: Dispatch custom event to notify Header component
                window.dispatchEvent(new Event('userDataUpdated'));

                // Role-based redirect
                console.log('🚀 Redirecting based on role:', userData.role);

                // Use window.location for hard navigation to ensure clean state
                setTimeout(() => {
                    switch (userData.role) {
                        case 'admin':
                            console.log('→ Going to Admin Dashboard');
                            window.location.href = all_routes.dashboard;
                            break;
                        case 'doctor':
                            console.log('→ Going to Doctor Dashboard');
                            window.location.href = all_routes.doctordashboard;
                            break;
                        case 'patient':
                        default:
                            console.log('→ Going to Patient Dashboard (patient role detected)');
                            window.location.href = all_routes.patientdashboard;
                            break;
                    }
                }, 100);
            } catch (error) {
                console.error('❌ Auth callback error:', error);
                navigate(all_routes.loginbasic + '?error=authentication_failed');
            }
        };

        handleSocialAuthCallback();
    }, [searchParams, navigate]);

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="text-dark mb-2">Completing authentication...</h5>
                <p className="text-muted">Please wait while we log you in.</p>
            </div>
        </div>
    );
};

export default AuthCallback;