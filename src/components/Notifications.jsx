import React, { useState } from 'react';
import { Trash2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Notifications.css';

const Notifications = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    
    // In a real application, this would come from a Context or API
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Potential match found in Camera Zone A',
            caseId: '',
            details: ''
        },
        {
            id: 2,
            caseId: '1001',
            details: 'High Confident gait and facial match detected confident score : 92%'
        },
        {
            id: 3,
            caseId: '1002',
            details: 'Subject re identified in Camera Zone D'
        },
        {
            id: 4,
            caseId: '1003',
            details: 'Tracking session ended. Case data securely achieved'
        },
        {
            id: 5,
            caseId: '1004',
            details: 'Subject detected entering Zone F via main gate.'
        }
    ]);

    const handleClearNotifications = () => {
        setNotifications([]);
    };

    const handleNotificationClick = (caseId) => {
        onClose(); // Close the modal before navigating
        navigate(`/case/${caseId || '123'}`);
    };

    if (!isOpen) return null;

    return (
        <div className="notification-overlay" onClick={onClose}>
            <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
                <button className="notif-close-btn" onClick={onClose} title="Close">
                    <XCircle size={26} fill="#FF5252" color="rgba(4,6,84,0.9)" />
                </button>
                <div className="notif-header">
                    <h2>Notifications</h2>
                    <div className="notif-header-actions">
                        <Trash2 size={22} color="#90E0EF" style={{ cursor: 'pointer' }} onClick={handleClearNotifications} title="Clear all" />
                    </div>
                </div>
                
                <div className="notif-list">
                    {notifications.length === 0 ? (
                        <p className="notif-empty">No new notifications.</p>
                    ) : (
                        notifications.map((notif) => (
                            <React.Fragment key={notif.id}>
                                <div 
                                    className="notif-item" 
                                    onClick={() => handleNotificationClick(notif.caseId)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {notif.title ? (
                                        <p className="notif-title">{notif.title}</p>
                                    ) : (
                                        <>
                                            <p className="notif-case">Case id : {notif.caseId || '______'}</p>
                                            <p className="notif-details">{notif.details}</p>
                                        </>
                                    )}
                                </div>
                            </React.Fragment>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
