import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import MainContent from '../components/layout/MainContent';
import FormContentComponent from '../components/FormContentComponent';
import AvatarComponent from '../components/AvatarComponent';

const Profile = () => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    const handleSubmitPhoto = () => {
        alert('Submitted update photo profile');
    };

    const handleSubmit = (values) => {
        console.log('Submitted update profile:', values);
        // Aquí puedes realizar cualquier acción necesaria con los valores del formulario, como enviarlos a tu backend.
    };

    return (
        <MainContent>
            <FormContentComponent
                title={'Profile'}
                onSubmit={handleSubmit}
            >
                <AvatarComponent submit={handleSubmitPhoto} />

                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                    style={{ width: '100%' }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email address!' },
                        ]}
                    >
                        <Input placeholder="Email" type="email" />
                    </Form.Item>
                    {open && (
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your password!' },
                                { min: 6, message: 'Password must be at least 6 characters long!' },
                            ]}
                        >
                            <Input.Password placeholder="Password" />

                        </Form.Item>
                    )}
                    <Form.Item>
                        <Button className='custom_btn' onClick={() => setOpen(!open)}>
                            {open ? "Unchange Password" : "Change Password"}
                        </Button>
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input placeholder="Phone" />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                    >
                        <Input placeholder="Address" />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'Please input your city!' }]}
                    >
                        <Input placeholder="City" />
                    </Form.Item>

                    <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ required: true, message: 'Please input your country!' }]}
                    >
                        <Input placeholder="Country" />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input.TextArea placeholder="Description" rows={5} />
                    </Form.Item>

                    <Form.Item>
                        <Button className='custom_btn' type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </FormContentComponent>
        </MainContent >
    );
};

export default Profile;
