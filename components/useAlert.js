import React, { useState } from 'react';

const useAlert = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const showSuccessAlert = (message) => {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000); // Clear message after 3 seconds
    };

    return { successMessage, showSuccessAlert };
};

export default useAlert;
