import { useEffect } from 'react';
import './toast.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    onClose: () => void;
    duration?: number;
}

const Toast = ({ message, type, onClose, duration = 4000 }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icons = {
        success: 'ti-circle-check',
        error: 'ti-alert-circle',
        info: 'ti-info-circle',
        warning: 'ti-alert-triangle'
    };

    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8',
        warning: '#ffc107'
    };

    return (
        <div
            className="toast-notification"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                backgroundColor: '#fff',
                border: `2px solid ${colors[type]}`,
                borderRadius: '8px',
                padding: '16px 20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 9999,
                minWidth: '300px',
                maxWidth: '400px',
                animation: 'slideInRight 0.3s ease-out'
            }}
        >
            <div className="d-flex align-items-start">
                <i
                    className={`ti ${icons[type]} fs-24 me-3`}
                    style={{ color: colors[type] }}
                />
                <div className="flex-grow-1">
                    <p className="mb-0 fw-semibold" style={{ color: colors[type] }}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </p>
                    <p className="mb-0 text-dark">{message}</p>
                </div>
                <button
                    className="btn btn-sm p-0 ms-2"
                    onClick={onClose}
                    style={{ background: 'none', border: 'none' }}
                >
                    <i className="ti ti-x" />
                </button>
            </div>
        </div>
    );
};

export default Toast;