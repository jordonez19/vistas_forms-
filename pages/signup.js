import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '../components/FormContentComponent';

const { Option } = Select;

const Signup = () => {

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Received values:', values);
    };

    return (
        <MainContent>
            <FormContentComponent
                title={'Sign Up'}
                onSubmit={handleSubmit}
            >
                <Form
                    style={{ width: '95%' }}
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'Please input your city!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please input a valid email address!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: 'Please select your role!' }]}
                    >
                        <Select>
                            <Option value="student">Student</Option>
                            <Option value="teacher">Teacher</Option>
                        </Select>
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

export default Signup;
