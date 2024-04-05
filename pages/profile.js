import React, { useState } from 'react';
import { Form, DatePicker, Input, Select, Button } from 'antd';
import moment from 'moment';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '@/components/FormContentComponent';

const { Option } = Select;

const Profile = () => {
    const [form] = Form.useForm();
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
                <Form form={form} onFinish={handleSubmit} layout='vertical' style={{ width: '100%' }}>
                    <Form.Item
                        name="course"
                        label="Course"
                        rules={[{ required: true, message: 'Please select a course!' }]}
                    >
                        <Select
                            placeholder="Select a course"
                            onChange={handleCourseSelection}
                        >
                            <Option value="web_development">Web Development Fundamentals - 5 months</Option>
                            <Option value="data_science">Introduction to Data Science with Python - 4 months</Option>
                            <Option value="cyber_security">Cyber Security Essentials - 3 months</Option>
                            <Option value="cloud_computing">Cloud Computing Basics - 6 months</Option>
                            <Option value="mobile_app">Building Mobile Applications with React Native - 5 months</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input placeholder='Title' />
                    </Form.Item>

                    <Form.Item
                        name="instructor"
                        label="Instructor"
                        rules={[{ required: true, message: 'Please input the instructor!' }]}
                    >
                        <Input placeholder='Instructor' />
                    </Form.Item>

                    <Form.Item
                        name="start_date"
                        label="Start Date"
                        rules={[{ required: true, message: 'Please select the start date!' }]}
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder='Start Date'
                            disabled={startDateDisabled}
                            value={startDate}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className='custom_btn' type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </FormContentComponent>
        </MainContent>
    );
};

export default Profile;
