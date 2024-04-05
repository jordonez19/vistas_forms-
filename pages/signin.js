import React from 'react';
import { Form, Input, Button } from 'antd';
import MainContent from '../components/layout/MainContent';
import { useAlert } from './useAlert';
import FormContentComponent from '../components/FormContentComponent';

const Signin = () => {

    const [form] = Form.useForm();
    const { handleSuccessAlert, handleErrorAlert, handleEditConfirmation, handleAcceptConfirmation } = useAlert();

    const handleSubmit = (values) => {
        handleSuccessAlert('Submitted Sign in');
        //handleErrorAlert('Submitted Sign in');
        //handleEditConfirmation('Submitted Sign in');
        //handleAcceptConfirmation('Submitted Sign in');
        console.log('Received values:', values);
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
                    layout="vertical" style={{ width: '95%' }}

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
                        <Button className='custom_btn' type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </FormContentComponent>
        </MainContent>
    );
};

export default Signin;
