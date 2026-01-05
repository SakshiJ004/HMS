import { useState, useEffect } from 'react';

interface UserData {
    _id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'doctor' | 'patient';
    profileImage?: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = () => {
            const userDataStr = localStorage.getItem('userData');
            const token = localStorage.getItem('token');

            if (userDataStr && token) {
                try {
                    const userData = JSON.parse(userDataStr);
                    setUser(userData);
                } catch (error) {
                    console.error('Error parsing user data:', error);
                    localStorage.clear();
                }
            }
            setLoading(false);
        };

        loadUser();

        // Listen for storage changes
        window.addEventListener('userDataUpdated', loadUser);
        return () => window.removeEventListener('userDataUpdated', loadUser);
    }, []);

    const isAdmin = user?.role === 'admin';
    const isDoctor = user?.role === 'doctor';
    const isPatient = user?.role === 'patient';

    return {
        user,
        loading,
        isAdmin,
        isDoctor,
        isPatient,
        isAuthenticated: !!user,
    };
};