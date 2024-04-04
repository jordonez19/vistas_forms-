import React from 'react';
import { Form, Input, Button } from 'antd';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '@/components/FormContentComponent';

const Signin = () => {

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Received values:', values);
        // Aquí puedes realizar cualquier acción necesaria con los valores del formulario, como enviarlos a tu backend.
    };

    return (
        <MainContent>
            <FormContentComponent
                title={'Sign in'}
                onSubmit={handleSubmit}
            >
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
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

                    <Form.Item>
                        <Button className='btn' type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </FormContentComponent>
        </MainContent>
    );
};

export default Signin;
