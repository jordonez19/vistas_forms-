import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import MainContent from '../components/layout/MainContent';;
import FormContentComponent from '@/components/FormContentComponent';

const Profile = () => {
    const [startDateDisabled, setStartDateDisabled] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [startDate, setStartDate] = useState(null);

    const handleSubmit = () => {
        alert('Submited!, remember your course start date is ' + startDate.format('MMMM Do YYYY') + ' and you selected ' + selectedCourse);
    };

    const handleCourseSelection = (value) => {
        setSelectedCourse(value);
        setStartDateDisabled(false);
        setStartDate(generateRandomDate(value));
    };

    const generateRandomDate = (course) => {
        const startDateMap = {
            web_development: moment(new Date(2024, 2, 25)),
            data_science: moment(new Date(2024, 3, 30)),
            cyber_security: moment(new Date(2024, 4, 15)),
            cloud_computing: moment(new Date(2024, 5, 10)),
            mobile_app: moment(new Date(2024, 6, 5))
        };

        return startDateMap[course];
    };

    return (
        <MainContent>
            <FormContentComponent
                title={'New Course'}
                onSubmit={handleSubmit}
            >
                <input
                    className="input_form"
                    name="title"
                    placeholder='Title'
                    type='text'
                />

                <input
                    className="input_form"
                    name="instructor"
                    placeholder='Instructor'
                    type='text'
                />

                <select
                    name="course"
                    className="input_form"
                    onChange={(e) => handleCourseSelection(e.target.value)}
                >
                    <option style={{ padding: 15 }} value="">Select a course</option>
                    <option style={{ padding: 15 }} value="web_development" >Web Development Fundamentals - 5 months</option>
                    <option style={{ padding: 15 }} value="data_science" >Introduction to Data Science with Python - 4 months</option>
                    <option style={{ padding: 15 }} value="cyber_security" >Cyber Security Essentials - 3 months</option>
                    <option style={{ padding: 15 }} value="cloud_computing" >Cloud Computing Basics - 6 months</option>
                    <option style={{ padding: 15 }} value="mobile_app" >Building Mobile Applications with React Native - 5 months</option>

                </select>

                <DatePicker
                    name="start_date"
                    className="input_form"
                    placeholder='Start Date'
                    disabled={true}
                    value={startDate}
                />

            </FormContentComponent>
        </MainContent>
    );
};

export default Profile;
