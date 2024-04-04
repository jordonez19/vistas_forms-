import React, { useState } from 'react';
import { DatePicker, Input, Select, Button } from 'antd';
import moment from 'moment';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '@/components/FormContentComponent';

const { Option } = Select;

const Profile = () => {
    const [startDateDisabled, setStartDateDisabled] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [startDate, setStartDate] = useState(null);

    const handleSubmit = (values) => {
        console.log('Submitted new course:', values);
        // Aquí puedes realizar cualquier acción necesaria con los valores del formulario, como enviarlos a tu backend.
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
                <Input
                    className="input_form"
                    name="title"
                    placeholder='Title'
                />

                <Input
                    className="input_form"
                    name="instructor"
                    placeholder='Instructor'
                />

                <Select
                    className="input_form"
                    name="course"
                    placeholder='Select a course'
                    onChange={handleCourseSelection}
                >
                    <Option style={{ padding: 15 }} value="web_development" >Web Development Fundamentals - 5 months</Option>
                    <Option style={{ padding: 15 }} value="data_science" >Introduction to Data Science with Python - 4 months</Option>
                    <Option style={{ padding: 15 }} value="cyber_security" >Cyber Security Essentials - 3 months</Option>
                    <Option style={{ padding: 15 }} value="cloud_computing" >Cloud Computing Basics - 6 months</Option>
                    <Option style={{ padding: 15 }} value="mobile_app" >Building Mobile Applications with React Native - 5 months</Option>
                </Select>

                <DatePicker
                    className="input_form"
                    name="start_date"
                    placeholder='Start Date'
                    disabled={startDateDisabled}
                    value={startDate}
                />

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </FormContentComponent>
        </MainContent>
    );
};

export default Profile;
