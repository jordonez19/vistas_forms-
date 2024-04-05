import MainContent from '../components/layout/MainContent';;
import FormContentComponent from '@/components/FormContentComponent';
import { Form, Input, Select, Button } from 'antd';

const Students = () => {

    const { Option } = Select;
    const [form] = Form.useForm();

    const handleSubmit = () => {
        alert('submitted teachers');
    };

    const onFinish = (values) => {
        onSubmit(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validateEmail = (rule, value, callback) => {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            callback('Invalid email address');
        } else {
            callback();
        }
    };

    return (
        <MainContent>

            <FormContentComponent
                title={'New Student'}
                onSubmit={handleSubmit}
            >
                <Form
                    style={{ width: '95%' }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input the email!' },
                            { validator: validateEmail }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Born Date"
                        name="born_date"
                        rules={[{ required: true, message: 'Please input the born date!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please select the gender!' }]}
                    >
                        <Select>
                            <Option value="man">Man</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input the phone!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'Please input the city!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ required: true, message: 'Please input the country!' }]}
                    >
                        <Input />
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

export default Students;
