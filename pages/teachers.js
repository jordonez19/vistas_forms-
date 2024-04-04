// Teacherss.js
import React from 'react';
import TeachersContainer from '../containers/TeachersContainer';
import MainContent from '@/components/layout/MainContent';

const Teacherss = () => {
    const handleSubmit = () => {
        alert('submitted');
    };

    return (
        <MainContent>
            <TeachersContainer />
        </MainContent>
    );
};

export default Teacherss;
